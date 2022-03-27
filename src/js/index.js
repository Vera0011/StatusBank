window.onload = () => {
    bb.generate({
        bindto: "#pie-graphic-section",
        data: {
            columns: [
                ["Ingresos", 30, 200, 100, 170, 150, 250],
                ["Gastos", 130, 100, 140, 35, 110, 50]
            ],
            type: "pie",
            width: {
                radio: 0.5,
            },
            colors: {
                Ingresos: "#5CE797",
                Gastos: "#F26060"
            }
        }
    });

    bb.generate({
        bindto: "#bar-graphic-section",
        data: {
            columns: [
                ["Ingresos", 30, 200, 100, 170, 150, 250],
                ["Gastos", 130, 100, 140, 35, 110, 50]
            ],
            type: "bar",
            width: {
                radio: 5,
            },
            colors: {
                Ingresos: "#5CE797",
                Gastos: "#F26060"
            }
        }
    });
}