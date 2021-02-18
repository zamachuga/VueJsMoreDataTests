using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using WebApiApp.BL;

namespace WebApiApp
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			//services.AddCors(o =>
			//{
			//	o.AddPolicy("MyLocalhost", b =>
			//	{
			//		b.WithOrigins(
			//			"localhost", "http://localhost", 
			//			"localhost:5000", "http://localhost:5000",
			//			"localhost:8080", "http://localhost:8080"
			//		)
			//		.AllowAnyHeader()
			//		.AllowAnyMethod();
			//	});
			//});

			services.AddCors();

			services.AddTransient<GeneratorModels>();

			services.AddControllers();

			services.AddControllersWithViews();

			services.AddSwaggerGen(c =>
			{
				c.SwaggerDoc("v1", new OpenApiInfo { Title = "WebApiApp", Version = "v1" });
			});
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
				app.UseSwagger();
				app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "WebApiApp v1"));
			}

			app.UseRouting();

			//app.UseCors("MyLocalhost");
			app.UseCors(builder => { builder.AllowAnyOrigin(); builder.AllowAnyMethod(); });

			app.UseAuthorization();

			app.UseEndpoints(config =>
			{
				config.MapControllers();
				config.MapControllerRoute(
					name: "default",
					pattern: "{controller=Home}/{action=Index}/{id?}");
			});
		}
	}
}
