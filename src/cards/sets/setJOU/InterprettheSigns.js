"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InterprettheSigns extends UnimplementedCard {
  constructor (game) {
    super(game, "Interpret the Signs", "Journey into Nyx", "JOU");
  }
}

module.exports = InterprettheSigns;
