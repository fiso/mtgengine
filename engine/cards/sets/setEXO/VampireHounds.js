"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampireHounds extends UnimplementedCard {
  constructor(game) {
    super(game, "Vampire Hounds", "Exodus", "EXO");
  }
}

module.exports = VampireHounds;
