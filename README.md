# softensity
1-Pull the code
2-Run npm install
3-Change .env file if necessary
4-Run npm start

Execute the following endpoints: 
Get {{URL}}/clients
Get {{URL}}/clients/638de013e6d6b342cf78fcf3
Post {{URL}}/clients
{
    "name": "Client2",
    "address": {
        "street": "street",
        "buildingNumber": "25",
        "city": "Indaiatuba",
        "state": "SP",
        "country": "BR"
    }
}

Put {{URL}}/clients/638de013e6d6b342cf78fcf3
{
    "name": "Client-Alvaro",
    "address": {
        "street": "street",
        "buildingNumber": "25",
        "city": "Indaiatuba",
        "state": "SP",
        "country": "BR"
    }
}
