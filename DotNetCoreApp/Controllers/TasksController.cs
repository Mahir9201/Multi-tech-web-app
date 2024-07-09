using Microsoft.AspNetCore.Mvc;
using DotNetCoreApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace DotNetCoreApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private static List<DotNetCoreApp.Models.Task> tasks = new List<DotNetCoreApp.Models.Task>
        {
            new DotNetCoreApp.Models.Task { Id = 1, Name = "Task 1" },
            new DotNetCoreApp.Models.Task { Id = 2, Name = "Task 2" }
        };

        [HttpGet]
        public IActionResult GetTasks()
        {
            return Ok(tasks);
        }

        [HttpPost]
        public IActionResult AddTask([FromBody] DotNetCoreApp.Models.Task task)
        {
            task.Id = tasks.Max(t => t.Id) + 1;
            tasks.Add(task);
            return Ok(task);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateTask(int id, [FromBody] DotNetCoreApp.Models.Task task)
        {
            var existingTask = tasks.FirstOrDefault(t => t.Id == id);
            if (existingTask == null)
            {
                return NotFound();
            }
            existingTask.Name = task.Name;
            return Ok(existingTask);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTask(int id)
        {
            var task = tasks.FirstOrDefault(t => t.Id == id);
            if (task == null)
            {
                return NotFound();
            }
            tasks.Remove(task);
            return Ok();
        }
    }
}
