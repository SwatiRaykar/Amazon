using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmazonDAL1.Models
{
    public class Customer
    {
       public int Id { get; set; }
       public string Name { get; set; }
       public string Email { get; set; }
       public long PhoneNo { get; set; }
       public string Password { get; set; }
       public string address { get; set; }


    }

    public class LoginRequest
    {
        public string EmailId { get; set; }
        public string Password { get; set; }
    }
    public class userLogedIn
    {
        public int CustomerId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }
}
