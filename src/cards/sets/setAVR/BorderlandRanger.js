"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorderlandRanger extends UnimplementedCard {
  constructor (game) {
    super(game, "Borderland Ranger", "Avacyn Restored", "AVR");
  }
}

module.exports = BorderlandRanger;
