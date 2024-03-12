const fs = require("fs");
const dataFilePath = "./data.json";

const retrievingallTASKS = (req, res) => {
  try {
    const data = fs.readFileSync(dataFilePath, "utf8", (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
      }
    });
    if (data == "") {
      res.status(404).send("No data found");
    }

    try {
      const jsonData = JSON.parse(data);
      res.status(200).json(jsonData);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      res.status(500).send("Error parsing JSON data");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Some error occured");
  }
};

const creatingtasks = (req, res) => {
  const newTask = req.body;
  let tasks = [];
  try {
    const data = fs.readFileSync(dataFilePath, "utf8", (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
      }
    });
    if (data != "") {
      tasks = JSON.parse(data);
    }
    try {
      const result = tasks.find((task) => task.id === newTask.id);
      console.log(result);
      if (result) {
        return res.status(400).send("Task ID already exists");
      }
      tasks.push(newTask);
      fs.writeFileSync(dataFilePath, JSON.stringify(tasks), (err) => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error");
        }
      });

      res.status(200).send("Task created successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const RetrievingSpecificTask = (req, res) => {
  const id = req.params.id;

  try {
    const data = fs.readFileSync(dataFilePath, "utf8", (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
      }
    });
    const tasks = JSON.parse(data);
    if (tasks) {
      const result = tasks.find((task) => task.id == id);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(400).send("No id exist");
      }
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const deletingTask = (req, res) => {
  const id = req.params.id;
  try {
    const data = fs.readFileSync(dataFilePath, "utf8", (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
      }
    });
    const tasks = JSON.parse(data);
    if (data) {
      const updatedTasks = tasks.filter((task) => task.id !== id);
      if (updatedTasks) {
        fs.writeFileSync(dataFilePath, JSON.stringify(updatedTasks), (err) => {
          if (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
          }
        });
        res.status(200).send("Deleted Successfulyy...");
      } else {
        res.status(400).send("No id exist");
      }
    } else {
      res.status(403).send("File is empty !");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const updatedTasks = (req, res) => {
  let id = req.params.id;
  let updata = req.body;

  try {
    const data = fs.readFileSync(dataFilePath, "utf8", (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
      }
    });
    console.log(data);
    if (data == "") {
      res.status(504).send("File is empty !");
      return;
    }
    const tasks = JSON.parse(data);
    try {
      let index = tasks.findIndex((task) => task.id == id);
      if (index === -1) {
        res.status(404).send("No data found");
        return;
      } else {
        tasks[index].id = updata.id;
        tasks[index].title = updata.title;
        tasks[index].description = updata.description;
        tasks[index].completeStatus = updata.completeStatus;

        fs.writeFileSync(dataFilePath, JSON.stringify(tasks));
        res.status(200).send("Task updated successffully!");
      }
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

//patch
const UpdateStatus = (req, res) => {
  const taskId = parseInt(req.params.id);
  const { completedStatus } = req.body;

  let data = fs.readFileSync("./data.json", "utf8");

  console.log(data);

  let jsonData = JSON.parse(data);

  // Find the task by ID
  
  const taskIndex = jsonData.findIndex(task => task.id == taskId);

  if (taskIndex !== -1) {
    // Update the completed status
    jsonData[taskIndex].completedStatus = completedStatus;
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData));
    res.status(200).json({ message: `Task ${taskId} updated successfully` });
  } else {
    res.status(404).json({ message: `Task with ID ${taskId} not found` });
  }
};

module.exports = {
  retrievingallTASKS,
  creatingtasks,
  RetrievingSpecificTask,
  deletingTask,
  updatedTasks,
  UpdateStatus,
};
