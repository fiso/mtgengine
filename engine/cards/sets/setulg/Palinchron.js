"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Palinchron extends Card {
  constructor(game) {
    super(game, "Palinchron", "Urza's Legacy", "ULG");
  }
}

module.exports = Palinchron;
