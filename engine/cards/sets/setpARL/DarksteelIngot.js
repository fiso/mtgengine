"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarksteelIngot extends Card {
  constructor(game) {
    super(game, "Darksteel Ingot", "Arena League", "pARL");
  }
}

module.exports = DarksteelIngot;
