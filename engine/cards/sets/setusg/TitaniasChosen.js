"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TitaniasChosenBase = require("../setC14/TitaniasChosen.js");

class TitaniasChosen extends TitaniasChosenBase {
  constructor(game) {
    super(game, "Titania's Chosen", "Urza's Saga", "USG");
  }
}

module.exports = TitaniasChosen;
