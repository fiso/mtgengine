"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WillowDryad extends Card {
  constructor(game) {
    super(game, "Willow Dryad", "Portal", "POR");
  }
}

module.exports = WillowDryad;
