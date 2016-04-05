"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SmokeTeller extends UnimplementedCard {
  constructor(game) {
    super(game, "Smoke Teller", "Khans of Tarkir", "KTK");
  }
}

module.exports = SmokeTeller;
