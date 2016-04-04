"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ErdwalIlluminator extends Card {
  constructor(game) {
    super(game, "Erdwal Illuminator", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ErdwalIlluminator;
