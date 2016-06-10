"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalothNull extends UnimplementedCard {
  constructor (game) {
    super(game, "Baloth Null", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = BalothNull;
