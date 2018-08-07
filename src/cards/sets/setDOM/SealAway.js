"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SealAway extends UnimplementedCard {
  constructor (game) {
    super(game, "Seal Away", "Dominaria", "DOM");
  }
}

module.exports = SealAway;
