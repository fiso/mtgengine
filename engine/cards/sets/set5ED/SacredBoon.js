"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SacredBoon extends Card {
  constructor(game) {
    super(game, "Sacred Boon", "Fifth Edition", "5ED");
  }
}

module.exports = SacredBoon;
