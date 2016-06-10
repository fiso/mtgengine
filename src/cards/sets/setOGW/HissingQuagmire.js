"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HissingQuagmire extends UnimplementedCard {
  constructor (game) {
    super(game, "Hissing Quagmire", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = HissingQuagmire;
