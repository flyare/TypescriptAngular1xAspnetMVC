using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AngularTypeScriptAspMvc.Models
{
    public partial class TestEntities : DbContext
    {
        public TestEntities(bool lazy)
        {
            Configuration.LazyLoadingEnabled = lazy;
        }
    }
}