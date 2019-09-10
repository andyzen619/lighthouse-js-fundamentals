for (let i = 100; i <= 200; i++) {
    var multiple3 = i % 3;
    var multiple4 = i % 4;
    console.log(multiple3 == 0 && multiple4 == 0 ? "LoopyLighthouse" : (multiple3 == 0 ? "Loopy" : multiple4 == 0 ? "Lighthouse" : i));
}