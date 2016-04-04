"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FerozsBan extends Card {
  constructor(game) {
    super(game, "Feroz's Ban", "Fifth Edition", "5ED");
  }
}

module.exports = FerozsBan;
