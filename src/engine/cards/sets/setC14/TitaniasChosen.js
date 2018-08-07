"use strict";
const Constants = require ("../../../Constants");
const TitaniasChosenBase = require("../setCMA/TitaniasChosen");

class TitaniasChosen extends TitaniasChosenBase {
  constructor (game) {
    super(game, "Titania's Chosen", "Commander 2014", "C14");
  }
}

module.exports = TitaniasChosen;
