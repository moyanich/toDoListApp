document.querySelector('#add-task').onclick = function() {
      if(document.querySelector('#newtask input').value.length == 0) {
            alert("Please enter a Task");
      }
      else {
            document.querySelector('#tasks').innerHTML+=`
                  <div class="grid grid-cols-3 gap-2">
                        <div class="task col-span-2 sm:col-span-2">
                              <span id="taskname">
                                    ${document.querySelector('#newtask input').value}
                              </span>
                        </div>
                        <div class="col-span-1 sm:col-span-1">
                              <button type="button" class="delete mt-1 border border-transparent text-base font-small rounded-md text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-6 text-sm">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                              </button>
                        </div>
                  </div>
            `;
      }
}

