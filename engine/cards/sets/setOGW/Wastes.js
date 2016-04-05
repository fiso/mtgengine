"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wastes extends UnimplementedCard {
  constructor(game) {
    super(game, "Wastes", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = Wastes;
