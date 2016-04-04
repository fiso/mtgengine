"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OathofJace extends UnimplementedCard {
  constructor(game) {
    super(game, "Oath of Jace", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = OathofJace;
