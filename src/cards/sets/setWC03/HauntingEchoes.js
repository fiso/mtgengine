"use strict";
const Constants = require ("../../../Constants");
const HauntingEchoesBase = require("../setM11/HauntingEchoes");

class HauntingEchoes extends HauntingEchoesBase {
  constructor (game) {
    super(game, "Haunting Echoes", "World Championship Decks 2003", "WC03");
  }
}

module.exports = HauntingEchoes;
