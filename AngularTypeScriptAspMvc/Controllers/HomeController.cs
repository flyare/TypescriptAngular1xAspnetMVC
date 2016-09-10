using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.UI.WebControls;

namespace AngularTypeScriptAspMvc.Controllers
{
    public class HomeController : Controller
    {
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
    }
}