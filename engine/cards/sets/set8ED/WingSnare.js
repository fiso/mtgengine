"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WingSnare extends Card {
  constructor(game) {
    super(game, "Wing Snare", "Eighth Edition", "8ED");
  }
}

module.exports = WingSnare;
