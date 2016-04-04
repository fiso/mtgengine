"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AccursedSpirit extends Card {
  constructor(game) {
    super(game, "Accursed Spirit", "Magic 2014 Core Set", "M14");
  }
}

module.exports = AccursedSpirit;
