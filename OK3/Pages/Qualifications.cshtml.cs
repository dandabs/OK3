using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace OK3.Pages
{
    public class QualificationsModel : PageModel
    {
        private readonly ILogger<PortfolioModel> _logger;

        public QualificationsModel(ILogger<PortfolioModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}
