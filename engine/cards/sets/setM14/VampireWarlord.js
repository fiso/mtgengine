"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampireWarlord extends UnimplementedCard {
  constructor(game) {
    super(game, "Vampire Warlord", "Magic 2014 Core Set", "M14");
  }
}

module.exports = VampireWarlord;
