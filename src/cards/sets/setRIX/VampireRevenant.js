"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampireRevenant extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampire Revenant", "Rivals of Ixalan", "RIX");
  }
}

module.exports = VampireRevenant;
