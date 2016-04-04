"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RaidersSpoils extends Card {
  constructor(game) {
    super(game, "Raiders' Spoils", "Khans of Tarkir", "KTK");
  }
}

module.exports = RaidersSpoils;
