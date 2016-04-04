"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CirclingVultures extends Card {
  constructor(game) {
    super(game, "Circling Vultures", "Weatherlight", "WTH");
  }
}

module.exports = CirclingVultures;
