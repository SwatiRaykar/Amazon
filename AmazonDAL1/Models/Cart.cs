using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmazonDAL1.Models
{
    public class Cart
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int quantity { get; set; }
   
        
    }

    public class CartResult
    {
        public List<Products> CartItems { get; set; }
        public int SubTotal { get; set; }
    }
}
