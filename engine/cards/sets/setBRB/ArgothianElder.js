"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArgothianElder extends Card {
  constructor(game) {
    super(game, "Argothian Elder", "Battle Royale Box Set", "BRB");
  }
}

module.exports = ArgothianElder;
