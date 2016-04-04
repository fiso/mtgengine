"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Stupor extends Card {
  constructor(game) {
    super(game, "Stupor", "Arena League", "pARL");
  }
}

module.exports = Stupor;
