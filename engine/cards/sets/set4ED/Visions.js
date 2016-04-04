"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Visions extends Card {
  constructor(game) {
    super(game, "Visions", "Fourth Edition", "4ED");
  }
}

module.exports = Visions;
