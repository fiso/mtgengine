"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RuinousMinotaur extends Card {
  constructor(game) {
    super(game, "Ruinous Minotaur", "Zendikar", "ZEN");
  }
}

module.exports = RuinousMinotaur;
