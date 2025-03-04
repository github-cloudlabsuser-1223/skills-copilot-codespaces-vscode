# Define variables
$resourceGroupName = "myResourceGroup"
$location = "EastUS"
$vmName = "myVM"
$adminUsername = "azureuser"
$adminPassword = "P@ssw0rd1234!"

# Create a resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a virtual network
$vnet = New-AzVirtualNetwork -ResourceGroupName $resourceGroupName -Location $location -Name "$vmName-vnet" -AddressPrefix "10.0.0.0/16"
$subnet = Add-AzVirtualNetworkSubnetConfig -Name "default" -AddressPrefix "10.0.0.0/24" -VirtualNetwork $vnet
$vnet | Set-AzVirtualNetwork

# Create a public IP address
$publicIp = New-AzPublicIpAddress -ResourceGroupName $resourceGroupName -Location $location -Name "$vmName-ip" -AllocationMethod Dynamic

# Create a network security group
$nsg = New-AzNetworkSecurityGroup -ResourceGroupName $resourceGroupName -Location $location -Name "$vmName-nsg"

# Create a network interface
$nic = New-AzNetworkInterface -ResourceGroupName $resourceGroupName -Location $location -Name "$vmName