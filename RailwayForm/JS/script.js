class RailwayForm {
    constructor(name, address, trainno, date) {
        this.name = name;
        this.address = address;
        this.trainno = trainno;
        this.date = date;
    }
    // getTicket(name, address, trainno, date){
    //     this.name = name;
    //     this.address = address;
    //     this.trainno = trainno;
    //     this.date = date;
    // }
    preview() {
        alert(`hello ${this.name} your trainno is ${this.trainno} and your address is ${this.address}.For the date ${this.date} do you want to confirm the ticket ?

        Thanku for visiting us.`);
    }
    submit() {
        alert(`hello ${this.name} your trainno is ${this.trainno} and your address is ${this.address}.For the date ${this.date} your ticket has been booked.

        Thanku for visiting us.`);
    }
    cancle() {
        alert(`hello ${this.name} your trainno is ${this.trainno} and your address is ${this.address}.For the date ${this.date} your ticket has got cancled.

        Thanku for visiting us.`);
    }
}

// const name1 = document.getElementById('name').value;
// const address1 = document.getElementById('address').value;
// const trainno1 = document.getElementById('trainno').value;
// const date1 = document.getElementById('date').value;
// const ticket = new RailwayForm(name1, address1, trainno1, date1);

function preview() {
    const name1 = document.getElementById('name').value;
    const address1 = document.getElementById('address').value;
    const trainno1 = document.getElementById('trainno').value;
    const date1 = document.getElementById('date').value;
    const ticket = new RailwayForm(name1, address1, trainno1, date1);
    ticket.preview();
}

// const preview = document.getElementById('preview').addEventListener('click', () => {
//     const name1 = document.getElementById('name').value;
//     const address1 = document.getElementById('address').value;
//     const trainno1 = document.getElementById('trainno').value;
//     const date1 = document.getElementById('date').value;
//     const ticket = new RailwayForm(name1, address1, trainno1, date1);
//     ticket.preview();
    //    const ticket = new RailwayForm();
    //    ticket.getTicket(name1, address1, trainno1, date1)
    //    ticket.preview();
// })

// const submit = document.getElementById('submit').addEventListener('click', () => {
//     const name1 = document.getElementById('name').value;
//     const address1 = document.getElementById('address').value;
//     const trainno1 = document.getElementById('trainno').value;
//     const date1 = document.getElementById('date').value;
//     const ticket = new RailwayForm(name1, address1, trainno1, date1);
//     ticket.submit();
// })

// const cancle = document.getElementById('cancle').addEventListener('click', () => {
//     const name1 = document.getElementById('name').value;
//     const address1 = document.getElementById('address').value;
//     const trainno1 = document.getElementById('trainno').value;
//     const date1 = document.getElementById('date').value;
//     const ticket = new RailwayForm(name1, address1, trainno1, date1);
//     ticket.cancle();
// })


