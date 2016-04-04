"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MortalsArdorBase = require("../setBNG/MortalsArdor.js");

class MortalsArdor extends MortalsArdorBase {
  constructor(game) {
    super(game, "Mortal's Ardor", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = MortalsArdor;
