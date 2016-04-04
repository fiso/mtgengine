"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Spinebiter extends Card {
  constructor(game) {
    super(game, "Spinebiter", "New Phyrexia", "NPH");
  }
}

module.exports = Spinebiter;
