"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GaeasBlessing extends UnimplementedCard {
  constructor (game) {
    super(game, "Gaea's Blessing", "Dominaria", "DOM");
  }
}

module.exports = GaeasBlessing;
