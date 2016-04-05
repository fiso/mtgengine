"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiftofTusks extends UnimplementedCard {
  constructor(game) {
    super(game, "Gift of Tusks", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = GiftofTusks;
