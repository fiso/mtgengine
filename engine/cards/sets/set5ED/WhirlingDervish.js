"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WhirlingDervish extends Card {
  constructor(game) {
    super(game, "Whirling Dervish", "Fifth Edition", "5ED");
  }
}

module.exports = WhirlingDervish;
