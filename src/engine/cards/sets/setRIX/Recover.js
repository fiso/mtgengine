"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Recover extends UnimplementedCard {
  constructor (game) {
    super(game, "Recover", "Rivals of Ixalan", "RIX");
  }
}

module.exports = Recover;
