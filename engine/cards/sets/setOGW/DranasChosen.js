"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DranasChosen extends UnimplementedCard {
  constructor(game) {
    super(game, "Drana's Chosen", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = DranasChosen;
