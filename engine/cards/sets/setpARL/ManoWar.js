"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManoWar extends Card {
  constructor(game) {
    super(game, "Man-o'-War", "Arena League", "pARL");
  }
}

module.exports = ManoWar;
