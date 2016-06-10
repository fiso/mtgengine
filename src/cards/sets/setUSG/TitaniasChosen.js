"use strict";
const Constants = require ("../../../Constants");
const TitaniasChosenBase = require("../setC14/TitaniasChosen");

class TitaniasChosen extends TitaniasChosenBase {
  constructor (game) {
    super(game, "Titania's Chosen", "Urza's Saga", "USG");
  }
}

module.exports = TitaniasChosen;
