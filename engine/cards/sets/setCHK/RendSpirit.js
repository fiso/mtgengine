"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RendSpirit extends Card {
  constructor(game) {
    super(game, "Rend Spirit", "Champions of Kamigawa", "CHK");
  }
}

module.exports = RendSpirit;
