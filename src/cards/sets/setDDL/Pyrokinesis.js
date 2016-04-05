"use strict";
const Constants = require ("../../../Constants");
const PyrokinesisBase = require("../setALL/Pyrokinesis");

class Pyrokinesis extends PyrokinesisBase {
  constructor(game) {
    super(game, "Pyrokinesis", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = Pyrokinesis;
