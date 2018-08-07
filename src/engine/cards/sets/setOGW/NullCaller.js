"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NullCaller extends UnimplementedCard {
  constructor (game) {
    super(game, "Null Caller", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = NullCaller;
