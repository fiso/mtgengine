"use strict";
const Constants = require ("../../../Constants");
const AnaxandCymedeBase = require("../setTHS/AnaxandCymede");

class AnaxandCymede extends AnaxandCymedeBase {
  constructor (game) {
    super(game, "Anax and Cymede", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = AnaxandCymede;
