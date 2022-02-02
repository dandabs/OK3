using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

using System.IO;

namespace OK3.Pages
{
    public class PortfolioModel : PageModel
    {
        private readonly ILogger<PortfolioModel> _logger;

        public PortfolioModel(ILogger<PortfolioModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            string files = Directory.GetParent(System.AppDomain.CurrentDomain.BaseDirectory).FullName + "/library/projects";
            Console.WriteLine(files);
            if (Directory.Exists(files)) {
                DirectoryInfo di = new DirectoryInfo(files);
                foreach (FileInfo fi in di.GetFiles()) {
                    Console.WriteLine(fi.FullName);
                    using (StreamReader r = new StreamReader(fi.FullName)) {
                        string json = r.ReadToEnd();
                        dynamic project = JsonConvert.DeserializeObject(json);
                        Console.WriteLine(project.name);
                        
                        //Console.WriteLine(content.CssClass);

                    }
                }
            }
        }
    }
}
