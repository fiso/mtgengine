"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VampireHounds extends Card {
  constructor(game) {
    super(game, "Vampire Hounds", "Exodus", "EXO");
  }
}

module.exports = VampireHounds;
