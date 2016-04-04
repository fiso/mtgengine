"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Duress extends Card {
  constructor(game) {
    super(game, "Duress", "Arena League", "pARL");
  }
}

module.exports = Duress;
