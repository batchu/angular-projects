function TODO($scope){
    
    $scope.todos=[
    {task:"Clothes are Dirty. Need to do Laundry",done:false},
    {task:"No Quarters. Need to get some from the Bank",done:false},
    {task:"Forgot to go to the Bank. Need to borrow from a friend",done:false},
    {task:"Friends are out of quarters. My clothes have now become a public health risk",done:false},
    {task:"Need to call Center for disease control (CDC)",done:false},
    {task:"Ouch. I'm out of minutes. Need to borrow a phone from a friend",done:false},
    {task:"Here we go again!",done:false}
    ];
    
    $scope.addTask=function(){
        
        $scope.todos.push({task:$scope.newTask,done:false});
        $scope.newTask='';
    };
    
    $scope.remaining=function(){
      var count=0;
      angular.forEach($scope.todos,function(todo){
          count+=todo.done?0:1;
      });
      return count;
    };
    
    $scope.archive=function(){
      var oldTodos = $scope.todos;
      $scope.todos=[];
      
      angular.forEach(oldTodos,function(todo)
  {
      if(!todo.done) $scope.todos.push(todo);
  });
        
    };
};