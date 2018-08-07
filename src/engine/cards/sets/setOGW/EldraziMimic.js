"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EldraziMimic extends UnimplementedCard {
  constructor (game) {
    super(game, "Eldrazi Mimic", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = EldraziMimic;
