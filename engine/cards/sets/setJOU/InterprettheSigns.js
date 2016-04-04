"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InterprettheSigns extends Card {
  constructor(game) {
    super(game, "Interpret the Signs", "Journey into Nyx", "JOU");
  }
}

module.exports = InterprettheSigns;
