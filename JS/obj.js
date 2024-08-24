function my() {
    let person = {
        name: "deepz",
        address: "xxxx",
        age: 20
    };

    person.name = "deepika";
    person.address = "yyyy";
    person.age = 21;

    for (let key in person) {
        if (person.hasOwnProperty(key)) {
            console.log(key + ": " + person[key]);
        }
    }

    console.log("name" in person);
    console.log("address" in person);
    console.log("age" in person);
    console.log("gender" in person);
};
my();