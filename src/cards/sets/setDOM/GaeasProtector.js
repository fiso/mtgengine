"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GaeasProtector extends UnimplementedCard {
  constructor (game) {
    super(game, "Gaea's Protector", "Dominaria", "DOM");
  }
}

module.exports = GaeasProtector;
