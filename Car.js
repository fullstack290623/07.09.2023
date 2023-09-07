class Car {
    constructor(_manufacturer, _model, _price, _license,_year, _color, _maintenance) {
        this.manufacturer = _manufacturer,
        this.model = _model,
        this.price = _price,
        this.license = _license, 
        this.year = _year,
        this.color = _color,
        this.maintenance = _maintenance
    }

    compare_year(year) {
        return this.year == year
    }

    paint_my_car(_color) {
        this.color = _color
    }
}
