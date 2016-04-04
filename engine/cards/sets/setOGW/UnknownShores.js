"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnknownShores extends UnimplementedCard {
  constructor(game) {
    super(game, "Unknown Shores", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = UnknownShores;
