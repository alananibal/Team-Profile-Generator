module.exports = (cards) => {
    
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>Team-profile-Result</title>
</head>
<body>
    <header class="text-center p-3 mb-2 bg-primary text-white "><h1>My Team</h1></header>
    
    <main class="container">
        <section class="row justify-content-around m-5">
            
           ${cards}
                        
                

           
        </section>

  
    </main>
    
</body>
</html>
    `
};