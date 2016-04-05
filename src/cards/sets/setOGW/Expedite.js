"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Expedite extends UnimplementedCard {
  constructor(game) {
    super(game, "Expedite", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = Expedite;
