"use strict";
const Constants = require ("../../../Constants");
const HauntingEchoesBase = require("../setM11/HauntingEchoes");

class HauntingEchoes extends HauntingEchoesBase {
  constructor (game) {
    super(game, "Haunting Echoes", "Magic 2010", "M10");
  }
}

module.exports = HauntingEchoes;
