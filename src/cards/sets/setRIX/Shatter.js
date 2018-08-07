"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shatter extends UnimplementedCard {
  constructor (game) {
    super(game, "Shatter", "Rivals of Ixalan", "RIX");
  }
}

module.exports = Shatter;
