using AmazonDAL1.Interface;
using AmazonDAL1.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Amazon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowSpecificOrigin")]
    public class CustomerController: ControllerBase
    {

        private readonly ICustomerRepository _customer;

        public CustomerController(ICustomerRepository customer)
        {
            _customer = customer;
        }
        [AllowAnonymous]
        [HttpPost("RegisterCustomer")]
        public IActionResult RegisterCustomer([FromBody] Customer customer)

        {
            var apiResponse = new APIResponse();
            var newCustomer = _customer.RegisterCustomer(customer);
            if (newCustomer != 0)
            {
                apiResponse.Success = true;
                apiResponse.Data = "Successfully registered";
                // SendMailUtility1.MEmail.SendRegistrationEmail(customer.EmailId, customer.FirstName);

            }
            else
            {
                apiResponse.Success = false;
                apiResponse.ErrorMessage = "Failed to create customer with provided input";
            }

            return Ok(apiResponse);
        }


        [AllowAnonymous]
        [HttpPost("CustomerLogin")]
        public ActionResult<userLogedIn> CustomerLogin([FromBody] LoginRequest login)
        {
            var response = new APIResponse();
            try
            {
                userLogedIn user = _customer.CustomerLogin(login);
                if (user != null)
                {
                    response.Success = true;
                    //response.Data = customers;
                    // response.Data = user.Name+" Login Successful !";
                    response.Data = user;
                }
                else
                {
                    response.Success = false;
                    response.Data = "Invalid User";

                }

            }
            catch (Exception ex)
            {
                Console.WriteLine("An error occurred: " + ex.Message);
            }
            return Ok(response);

        }

        [HttpGet("GetAllCustomers")]
        public ActionResult<IEnumerable<Customer>> GetAllCustomers()
        {
            var customers = _customer.GetAllCustomers();
            return Ok(customers);
        }


    }
}
