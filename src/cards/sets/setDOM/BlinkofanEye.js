"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlinkofanEye extends UnimplementedCard {
  constructor (game) {
    super(game, "Blink of an Eye", "Dominaria", "DOM");
  }
}

module.exports = BlinkofanEye;
