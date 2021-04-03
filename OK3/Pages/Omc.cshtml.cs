using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace OK3.Pages
{
    public class OmcModel : PageModel
    {
        private readonly ILogger<OmcModel> _logger;

        public OmcModel(ILogger<OmcModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}
