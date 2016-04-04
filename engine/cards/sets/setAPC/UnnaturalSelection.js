"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnnaturalSelection extends Card {
  constructor(game) {
    super(game, "Unnatural Selection", "Apocalypse", "APC");
  }
}

module.exports = UnnaturalSelection;
