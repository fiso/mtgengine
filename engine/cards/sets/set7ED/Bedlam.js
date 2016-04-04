"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Bedlam extends Card {
  constructor(game) {
    super(game, "Bedlam", "Seventh Edition", "7ED");
  }
}

module.exports = Bedlam;
