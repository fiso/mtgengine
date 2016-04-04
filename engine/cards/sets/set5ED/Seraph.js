"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Seraph extends Card {
  constructor(game) {
    super(game, "Seraph", "Fifth Edition", "5ED");
  }
}

module.exports = Seraph;
