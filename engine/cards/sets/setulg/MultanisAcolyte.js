"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MultanisAcolyte extends Card {
  constructor(game) {
    super(game, "Multani's Acolyte", "Urza's Legacy", "ULG");
  }
}

module.exports = MultanisAcolyte;
