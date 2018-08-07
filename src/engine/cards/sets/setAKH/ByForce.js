"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ByForce extends UnimplementedCard {
  constructor (game) {
    super(game, "By Force", "Amonkhet", "AKH");
  }
}

module.exports = ByForce;
