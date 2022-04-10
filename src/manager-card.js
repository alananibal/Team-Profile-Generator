const managerCard = managerData => {
    const {name, id, email, officeNumber} = managerData



    return `
    <!-- This is one card -->
        <div class="col">
            <div class="card text-white bg-primary mb-3" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">Manager</h5>
                    </div>
                    <div class="card-header">${name}</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-primary">ID:${id}</li>
                        <li class="list-group-item text-primary">Email: ${email} <a href="mailto:123@gmail.com">123@gmail.com</a> </li>
                        <li class="list-group-item text-primary">Office No.: ${officeNumber}</li>
                    </ul>
            </div>
        </div>
    `  ;



}

module.exports = managerCard;
          
