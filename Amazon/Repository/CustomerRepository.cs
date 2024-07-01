using AmazonDAL1.Interface;
using AmazonDAL1.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Logging;
using System.Data;
using System.Data.SqlClient;

namespace Amazon.Repository
{

    public class CustomerRepository:ICustomerRepository
    {

        private readonly string _connectionString;
        public CustomerRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("amazonConn");
        }

        public int RegisterCustomer(Customer customer)
        {
            SqlConnection con = new SqlConnection(_connectionString);

            SqlCommand cmd = new SqlCommand("[RegisterCustomer]", con);

            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@Name", customer.Name);
            cmd.Parameters.AddWithValue("@EmailId", customer.Email);
            cmd.Parameters.AddWithValue("@Password", customer.Password);
            cmd.Parameters.AddWithValue("@PhoneNo", customer.PhoneNo);
            cmd.Parameters.AddWithValue("@address", customer.address);

            con.Open();
            int i = cmd.ExecuteNonQuery();
            con.Close();
            if (i >= 1)
            {
                return 1;
            }
            else
            {
                return 0;
            }
            con.Close();
        }


        public userLogedIn CustomerLogin(LoginRequest login)
        {
            try
            {
                SqlConnection con = new SqlConnection(_connectionString);
                con.Open();
                SqlCommand cmd = new SqlCommand("[LoginCustomer]", con);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@EmailId", login.EmailId);
                cmd.Parameters.AddWithValue("@Password", login.Password);

                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    if (reader.Read())
                    {
                        userLogedIn user = new userLogedIn
                        {
                            CustomerId = Convert.ToInt32(reader["CustomerId"]),
                            Name = reader["Name"].ToString(),
                            Email = reader["Email"].ToString()
                        };

                        return user;
                    }
                    return null;// Invalid login credentials
                }

                con.Close();
            }
            catch (Exception ex)
            {
                LogHelper.LogExceptionMessage(System.Diagnostics.Tracing.EventLevel.Error, ex);
                throw new Exception(ex.Message);
            }
        }

        public IEnumerable<Customer> GetAllCustomers()
        {
            var products = new List<Customer>();

            SqlConnection con = new SqlConnection(_connectionString);

            SqlCommand cmd = new SqlCommand("[GetAllCustomers]", con);
            cmd.CommandType = CommandType.StoredProcedure;
            con.Open();
            SqlDataAdapter adapter = new SqlDataAdapter(cmd);

            DataTable dt = new DataTable();
            adapter.Fill(dt);

            for (int i = 0; i < dt.Rows.Count; i++)
            {
                Customer pdt = new Customer();


                pdt.Id = int.Parse(dt.Rows[i]["Id"].ToString());
                pdt.Name = dt.Rows[i]["Name"].ToString();
                pdt.Email = dt.Rows[i]["Email"].ToString();
                pdt.PhoneNo = long.Parse(dt.Rows[i]["PhoneNo"].ToString());
                pdt.address = dt.Rows[i]["address"].ToString();

                products.Add(pdt);

            }
            return products;
        }


    }
}
