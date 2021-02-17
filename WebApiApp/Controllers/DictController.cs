using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DTO = WebApiApp.Models.DTO;

namespace WebApiApp
{
	[Route("api/[controller]/[action]")]
	[ApiController]
	public class DictController : ControllerBase
	{
		[HttpGet]
		public string GetGroups()
		{
			throw new NotImplementedException();
		}

		[HttpGet]
		public string GetGroup(int Id)
		{
			throw new NotImplementedException();
		}
	}
}
