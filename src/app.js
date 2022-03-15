document.querySelector('#add-task').onclick = function() {
      if(document.querySelector('#newtask input').value.length == 0) {
            alert("Please enter a Task");
      }
      else {
            document.querySelector('#tasks').innerHTML+=`
                  <div class="task flex items-center mt-5">
                        <span id="taskname" class="basis-3/4">
                              ${document.querySelector('#newtask input').value}
                        </span>
                      
                        <button type="button" class="delete mt-1 border border-transparent text-base font-small rounded-md text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-6 text-sm"><i class="far fa-trash-alt"></i></button>
                  </div>
            `;
            var current_tasks = document.querySelectorAll(".delete");
            for(var i=0; i<current_tasks.length; i++) {
                  current_tasks[i].onclick = function(){
                        this.parentNode.remove();
                  }
            }

            var tasks = document.querySelectorAll(".task");
            for(var i=0; i< tasks.length; i++) {
                  tasks[i].onclick = function(){
                        this.classList.toggle('line-through');
                  }
            }

            document.querySelector("#newtask input").value = "";
            
      }
}

