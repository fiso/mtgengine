"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlessedLight extends UnimplementedCard {
  constructor (game) {
    super(game, "Blessed Light", "Dominaria", "DOM");
  }
}

module.exports = BlessedLight;
