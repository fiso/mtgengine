"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeoninArbiter extends UnimplementedCard {
  constructor (game) {
    super(game, "Leonin Arbiter", "Scars of Mirrodin", "SOM");
  }
}

module.exports = LeoninArbiter;
