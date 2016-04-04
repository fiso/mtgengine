"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HarmattanEfreet extends Card {
  constructor(game) {
    super(game, "Harmattan Efreet", "Classic Sixth Edition", "6ED");
  }
}

module.exports = HarmattanEfreet;
