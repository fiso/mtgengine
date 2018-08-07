"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EldraziAggressor extends UnimplementedCard {
  constructor (game) {
    super(game, "Eldrazi Aggressor", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = EldraziAggressor;
