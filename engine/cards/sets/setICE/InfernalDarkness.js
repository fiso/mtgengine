"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InfernalDarkness extends Card {
  constructor(game) {
    super(game, "Infernal Darkness", "Ice Age", "ICE");
  }
}

module.exports = InfernalDarkness;
