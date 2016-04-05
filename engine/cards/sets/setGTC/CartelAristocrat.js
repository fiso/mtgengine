"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CartelAristocrat extends UnimplementedCard {
  constructor(game) {
    super(game, "Cartel Aristocrat", "Gatecrash", "GTC");
  }
}

module.exports = CartelAristocrat;
