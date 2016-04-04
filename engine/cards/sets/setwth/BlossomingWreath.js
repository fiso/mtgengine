"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlossomingWreath extends Card {
  constructor(game) {
    super(game, "Blossoming Wreath", "Weatherlight", "WTH");
  }
}

module.exports = BlossomingWreath;
