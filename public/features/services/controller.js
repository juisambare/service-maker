function ServiceCtrl($scope,$http)
{
	//console.log("hello from services");
	$scope.message = "hello from controller";
	
	//$scope.serviceClients = serviceClients;
	
	$scope.create = function()
	{
		console.log($scope.serviceClient);
		$http.post("/serviceClients",$scope.serviceClient)
		.success(function(response)
			{
				$scope.all();
				//console.log(response);
			});
	}
var renderServiceClients = function(response)
{
	$scope.serviceClients = response;
};

$scope.remove = function(id)
{
	$http.delete("/serviceClients/" + id)
	.success(function(response)
			{
				$scope.all();
				//console.log(response);
			});
};
$scope.select = function(id)
{
	console.log(id);
	$http.get("/serviceClients/" + id)
	.success(function(response)
	{
console.log(response);
$scope.serviceClient = response;
	});

};
/*$scope.update = function()
{
	console.log($scope.serviceClient);
	$http.put("/serviceClients/" + $scope.serviceClient._id,$scope.serviceClient);
};*/

$scope.all = function()
{
$http.get("/serviceClients")
	.success(renderServiceClients);
}
$scope.all();
}