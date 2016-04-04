"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Castigate extends Card {
  constructor(game) {
    super(game, "Castigate", "Arena League", "pARL");
  }
}

module.exports = Castigate;
