
using AmazonDAL1.Interface;
using AmazonDAL1.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace Amazon.Repository
{
    public class ProductRepository : IProductRepository
    {

        private readonly string _connectionString;
        public ProductRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("amazonConn");
        }
        public IEnumerable<Products> GetAllProducts()
        {
            var products = new List<Products>();

            SqlConnection con = new SqlConnection(_connectionString);

            SqlCommand cmd = new SqlCommand("[GetProducts]", con);
            cmd.CommandType = CommandType.StoredProcedure;
            con.Open();
            SqlDataAdapter adapter = new SqlDataAdapter(cmd);

            DataTable dt = new DataTable();
            adapter.Fill(dt);

            for (int i = 0; i < dt.Rows.Count; i++)
            {
                Products pdt = new Products();


                pdt.Id = int.Parse(dt.Rows[i]["Id"].ToString());
                pdt.Name = dt.Rows[i]["Name"].ToString();
                pdt.Price = int.Parse(dt.Rows[i]["Price"].ToString());

                pdt.marketPrice = int.Parse(dt.Rows[i]["marketPrice"].ToString());
                pdt.imageURL = dt.Rows[i]["imageURL"].ToString();

                pdt.NOofRatings = int.Parse(dt.Rows[i]["NOofRatings"].ToString());
                pdt.TotalBuyCustomers = int.Parse(dt.Rows[i]["TotalBuyCustomers"].ToString());

                products.Add(pdt);

            }
            return products;
        }


        public void AddToCart(int ProductId, int quantity)
        {
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                using (SqlCommand cmd = new SqlCommand("AddtoCart", conn))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@ProductId", ProductId);
                    cmd.Parameters.AddWithValue("@quantity", quantity);

                    conn.Open();
                    cmd.ExecuteNonQuery();
                }
            }
        }

        public IEnumerable<ProductCart> GetCartItems()
        {
            var cartItems = new List<ProductCart>();

            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                using (SqlCommand cmd = new SqlCommand("GetCartItems", conn))
                {
                    cmd.CommandType = CommandType.StoredProcedure;

                    conn.Open();
                    /*  using (SqlDataReader reader = cmd.ExecuteReader())
                      {
                          while (reader.Read())
                          {
                              cartItems.Add(new Products
                              {
                                  Id = reader.GetInt32(0),
                                  Name = reader.GetString(1),
                                  Price = (int)reader.GetDouble(2),
                                  marketPrice = (int)reader.GetDouble(3),
                                  imageURL = reader.GetString(4),
                                  NOofRatings = reader.GetInt32(5),
                                  TotalBuyCustomers = reader.GetInt32(6),
                              });
                          }*/
                    SqlDataAdapter adapter = new SqlDataAdapter(cmd);

                    DataTable dt = new DataTable();
                    adapter.Fill(dt);

                    for (int i = 0; i < dt.Rows.Count; i++)
                    {
                        ProductCart pdt = new ProductCart();


                        pdt.Id = int.Parse(dt.Rows[i]["Id"].ToString());
                        pdt.Name = dt.Rows[i]["Name"].ToString();
                        pdt.Price = int.Parse(dt.Rows[i]["Price"].ToString());

                        pdt.marketPrice = int.Parse(dt.Rows[i]["marketPrice"].ToString());
                        pdt.imageURL = dt.Rows[i]["imageURL"].ToString();

                        pdt.NOofRatings = int.Parse(dt.Rows[i]["NOofRatings"].ToString());
                        pdt.TotalBuyCustomers = int.Parse(dt.Rows[i]["TotalBuyCustomers"].ToString());
                        pdt.quantity = int.Parse(dt.Rows[i]["quantity"].ToString());
                        pdt.TotalPrice = int.Parse(dt.Rows[i]["TotalPrice"].ToString());

                        cartItems.Add(pdt);

                    }
                    return cartItems;
                }
                
            }

            
        }
        public void RemoveProductFromCart(int ProductId)
        {
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                using (SqlCommand cmd = new SqlCommand("RemoveFromCart", conn))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@ProductId", ProductId);

                    conn.Open();
                    cmd.ExecuteNonQuery();
                }
            }
        }

        public int AddProduct(Products product)
        {
            SqlConnection con = new SqlConnection(_connectionString);

            SqlCommand cmd = new SqlCommand("[AddProduct]", con);

            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@Name", product.Name);
            cmd.Parameters.AddWithValue("@Price", product.Price);
            cmd.Parameters.AddWithValue("@marketPrice", product.marketPrice);
            cmd.Parameters.AddWithValue("@imageURL", product.imageURL);

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
        public IEnumerable<Orders> GetAllOrders()
        {
            var Orders = new List<Orders>();

            SqlConnection con = new SqlConnection(_connectionString);

            SqlCommand cmd = new SqlCommand("[GetAllOrders]", con);
            cmd.CommandType = CommandType.StoredProcedure;
            con.Open();
            SqlDataAdapter adapter = new SqlDataAdapter(cmd);

            DataTable dt = new DataTable();
            adapter.Fill(dt);

            for (int i = 0; i < dt.Rows.Count; i++)
            {
                Orders pdt = new Orders();

                pdt.Name = dt.Rows[i]["Name"].ToString();
                pdt.address = dt.Rows[i]["address"].ToString();
                pdt.PhoneNo = long.Parse(dt.Rows[i]["PhoneNo"].ToString());

                pdt.quantity = int.Parse(dt.Rows[i]["quantity"].ToString());
                
                pdt.TotalPrice = int.Parse(dt.Rows[i]["TotalPrice"].ToString());
                pdt.DeliveryDate = dt.Rows[i]["DeliveryDate"].ToString();
                pdt.PaymentType = dt.Rows[i]["PaymentType"].ToString();
                Orders.Add(pdt);

            }
            return Orders;
        }

    }
}
