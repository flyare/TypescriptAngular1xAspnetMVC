using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.UI.WebControls;
using AngularTypeScriptAspMvc.Models;

namespace AngularTypeScriptAspMvc.Controllers
{
    public class HomeController : Controller
    {
        private TestEntities _dbEntities;
        public HomeController()
        {
            _dbEntities = new TestEntities(false);
        }

        // GET= Home
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetStudents()
        {
            var data = new ArrayList
            {
                new {firstName = "Duc", lastName = "Phan Hoang", age = 35, address = "HCM", active = true},
                new {firstName = "Tran", lastName = "Tam Phong", age = 20, address = "HN", active = true}
            };

            return Json(data, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetProduct()
        {
            var list = new List<Product>();

            list = _dbEntities.Products.Select(product => product).ToList();

            return Json(list, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetProductByCategoryId(int id)
        {
            var list = new List<Product>();

            list = _dbEntities.Products.Where(x => x.CategoryId == id).ToList();

            return Json(list, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetProductCategory()
        {
            var list = new List<ProductCategory>();

            list = _dbEntities.ProductCategories.Select(category => category).ToList();

            return Json(list, JsonRequestBehavior.AllowGet);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _dbEntities.Dispose();
            }
        }
    }
}