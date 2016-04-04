"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PyrokinesisBase = require("../setALL/Pyrokinesis.js");

class Pyrokinesis extends PyrokinesisBase {
  constructor(game) {
    super(game, "Pyrokinesis", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = Pyrokinesis;
