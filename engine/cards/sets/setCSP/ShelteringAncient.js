"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShelteringAncient extends Card {
  constructor(game) {
    super(game, "Sheltering Ancient", "Coldsnap", "CSP");
  }
}

module.exports = ShelteringAncient;
