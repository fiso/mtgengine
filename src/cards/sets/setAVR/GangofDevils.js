"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GangofDevils extends UnimplementedCard {
  constructor (game) {
    super(game, "Gang of Devils", "Avacyn Restored", "AVR");
  }
}

module.exports = GangofDevils;
