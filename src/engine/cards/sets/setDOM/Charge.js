"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Charge extends UnimplementedCard {
  constructor (game) {
    super(game, "Charge", "Dominaria", "DOM");
  }
}

module.exports = Charge;
