"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalothPup extends UnimplementedCard {
  constructor(game) {
    super(game, "Baloth Pup", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = BalothPup;
