"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FanaticalFirebrand extends UnimplementedCard {
  constructor (game) {
    super(game, "Fanatical Firebrand", "Rivals of Ixalan", "RIX");
  }
}

module.exports = FanaticalFirebrand;
