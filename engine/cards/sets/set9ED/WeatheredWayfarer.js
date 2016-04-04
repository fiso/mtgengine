"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WeatheredWayfarer extends Card {
  constructor(game) {
    super(game, "Weathered Wayfarer", "Ninth Edition", "9ED");
  }
}

module.exports = WeatheredWayfarer;
