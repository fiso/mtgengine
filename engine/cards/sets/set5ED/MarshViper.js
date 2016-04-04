"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarshViper extends Card {
  constructor(game) {
    super(game, "Marsh Viper", "Fifth Edition", "5ED");
  }
}

module.exports = MarshViper;
