"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dismiss extends Card {
  constructor(game) {
    super(game, "Dismiss", "Arena League", "pARL");
  }
}

module.exports = Dismiss;
