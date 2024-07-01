using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmazonDAL1.Models
{
    public class Orders
    {
        public string Name { get; set; }
        public int quantity { get; set; }
        public string address { get; set; }
        public int TotalPrice { get; set; }
        public string DeliveryDate{ get; set; }
        public long PhoneNo { get; set; }
        public string PaymentType { get; set; }
       

    }
}
