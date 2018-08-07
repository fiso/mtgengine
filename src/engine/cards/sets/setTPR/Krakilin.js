"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Krakilin extends UnimplementedCard {
  constructor (game) {
    super(game, "Krakilin", "Tempest Remastered", "TPR");
  }
}

module.exports = Krakilin;
