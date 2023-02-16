# Project Polling API

<p>This app is a <strong>Backend build for Polling System</strong>. </p>
<p>App provides you the APIs to interact with the database. Anyone can create questions with options and also add votes to it. Authentication/User identity is not needed, this is going to be a completely open application.</p>

<p>Following are the different APIs configured :</p>

<ol>
<li>Get all questions and its options details:
  <ul>
  <li>Type : GET</li>
  <li>URL : <code>{hostedURL / localhost:8000}/questions</code></li>
  </ul>
</li>
<li>Get specific questions and its options details:
  <ul>
  <li>Type : GET</li>
  <li>URL : <code>{hostedURL / localhost:8000}/questions/:id</code></li>
  </ul>
</li>
<li>Create new question:
  <ul>
  <li>Type : POST</li>
  <li>URL : <code>{hostedURL / localhost:8000}/questions/create</code></li>
  <li>Form parameter : <code>title : New question title</code></li>
  </ul>
</li>
<li>Add option to specific question:
  <ul>
  <li>Type : POST</li>
  <li>URL : <code>{hostedURL / localhost:8000}/questions/:id/options/create</code></li>
  <li>Form parameter : <code>text : New option text</code></li>
  </ul>
</li>
<li>To delete a question and its options (it is not allowed to delete the question even if single option is having more than zero vote):
  <ul>
  <li>Type : POST</li>
  <li>URL : <code>{hostedURL / localhost:8000}/questions/:id/delete</code></li>
  </ul>
</li>
<li>To delete an option (it is not allowed to delete an option even if it is having more than zero vote):
  <ul>
  <li>Type : POST</li>
  <li>URL : <code>{hostedURL / localhost:8000}/options/:id/delete</code></li>
  </ul>
</li>
<li>To increment the count of vote for an option:
  <ul>
  <li>Type : POST</li>
  <li>URL : <code>{hostedURL / localhost:8000}/options/:id/add_vote</code></li>
  </ul>
</li>

</ol>

<p>Hosted URL : <code>https://polling-api-26u3.onrender.com</code>(If you want to test it through hosted server/Ready to test, no need to install anything)</p>
<p>Locally hosted server : <code>http://localhost:8000/</code>(If you want to test it on your system after completing the below mentioned setup.)</p>

<h2>Prerequisites:</h2>
  <ol>
    <li>Node should be installed on your Device</li>
    <li>Mongo DB should be installed</li>
  </ol>
 
<h2>How to setup ?</h2>
  <ol>
    <li>Download the zip file for this project from the repository or <a href="https://github.com/9Yogesh9/Csv-Parser/archive/refs/heads/main.zip">Click here to download !</a></li>
    <li>Extract the file open in VS Code.</li>
    <li>Run <code>npm i</code> this will install all dependencies.</li>
    <li>Run <code>nodemon index.js</code> (if this command doesn't work, then nodemon is not installed globally in your system, please run <code>npm i nodemon</code> before running this command.)</li>
    <li>The app will be live on port 8000, you can access API's now. To send the request please use <strong>POSTMAN</strong> or just install vs code extension <strong>RapidAPI Client</strong>.</li>
    <p><strong>Note : To run in local environment and link to your local mongo data base just uncomment the line 9 and comment line 3 and 10 in <code>mongoose.js</code> as the project is linked to cloud data base.</strong></p>
  </ol>
  
<h2>Sample Responses:</h2>
<ol>

<li>All Question details:
<pre>
{
  "msg": "Question Fetched !",
  "response": [
    {
      "_id": "63ee699641cd1a4861adf518",
      "title": "Question 1",
      "options": [
        "63ee6a8841cd1a4861adf51b",
        "63ee6ad941cd1a4861adf521",
        "63ee6adf41cd1a4861adf526"
      ],
      "createdAt": "2023-02-16T17:36:22.311Z",
      "updatedAt": "2023-02-16T17:41:51.147Z",
      "__v": 3
    }
  ]
}
</pre>
</li>

<li>Create Question:
<pre>{
  "msg": "Question Created !",
  "response": {
    "title": "Question 1",
    "options": [],
    "_id": "63ee699641cd1a4861adf518",
    "createdAt": "2023-02-16T17:36:22.311Z",
    "updatedAt": "2023-02-16T17:36:22.311Z",
    "__v": 0
  }
}</pre>
</li>

<li>Create new option:
<pre>
{
  "msg": "Option Created and linked successfully !",
  "response": {
    "_id": "63ee699641cd1a4861adf518",
    "title": "Question 1",
    "options": [
      {
        "question": "63ee699641cd1a4861adf518",
        "text": "Option 1",
        "votes": 0,
        "link_to_vote": "http://localhost:8000/api/options/63ee6a8841cd1a4861adf51b/add_vote",
        "_id": "63ee6a8841cd1a4861adf51b",
        "createdAt": "2023-02-16T17:40:24.177Z",
        "updatedAt": "2023-02-16T17:40:24.177Z",
        "__v": 0
      }
    ],
    "createdAt": "2023-02-16T17:36:22.311Z",
    "updatedAt": "2023-02-16T17:36:22.311Z",
    "__v": 0
  }
}
</pre>
</li>

</ol>

