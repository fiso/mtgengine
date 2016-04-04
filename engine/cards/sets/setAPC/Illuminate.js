"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Illuminate extends Card {
  constructor(game) {
    super(game, "Illuminate", "Apocalypse", "APC");
  }
}

module.exports = Illuminate;
