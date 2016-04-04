"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StitchersApprentice extends Card {
  constructor(game) {
    super(game, "Stitcher's Apprentice", "Innistrad", "ISD");
  }
}

module.exports = StitchersApprentice;
