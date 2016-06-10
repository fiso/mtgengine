"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OathofChandra extends UnimplementedCard {
  constructor (game) {
    super(game, "Oath of Chandra", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = OathofChandra;
