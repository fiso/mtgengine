"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EssenceDepleter extends UnimplementedCard {
  constructor(game) {
    super(game, "Essence Depleter", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = EssenceDepleter;
