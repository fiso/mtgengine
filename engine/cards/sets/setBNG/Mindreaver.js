"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mindreaver extends Card {
  constructor(game) {
    super(game, "Mindreaver", "Born of the Gods", "BNG");
  }
}

module.exports = Mindreaver;
