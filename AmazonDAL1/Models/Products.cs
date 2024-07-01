using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmazonDAL1.Models
{
    public class Products
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public float marketPrice { get; set; }
        public string imageURL { get; set; }
        public int NOofRatings { get; set; }
        public int TotalBuyCustomers { get; set; }
    }
    public class ProductCart
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public float marketPrice { get; set; }
        public string imageURL { get; set; }
        public int NOofRatings { get; set; }
        public int TotalBuyCustomers { get; set; }
        public int quantity { get; set; }
        public int TotalPrice { get; set; }

    }

}
