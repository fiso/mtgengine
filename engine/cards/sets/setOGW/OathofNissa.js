"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OathofNissa extends UnimplementedCard {
  constructor(game) {
    super(game, "Oath of Nissa", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = OathofNissa;
