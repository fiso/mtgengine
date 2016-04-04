"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Willbender extends Card {
  constructor(game) {
    super(game, "Willbender", "Commander 2014", "C14");
  }
}

module.exports = Willbender;
