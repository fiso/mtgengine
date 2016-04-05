"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemurCharger extends UnimplementedCard {
  constructor(game) {
    super(game, "Temur Charger", "Khans of Tarkir", "KTK");
  }
}

module.exports = TemurCharger;
