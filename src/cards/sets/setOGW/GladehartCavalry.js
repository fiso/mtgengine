"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GladehartCavalry extends UnimplementedCard {
  constructor (game) {
    super(game, "Gladehart Cavalry", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = GladehartCavalry;
