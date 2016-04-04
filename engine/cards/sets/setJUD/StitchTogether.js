"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StitchTogether extends Card {
  constructor(game) {
    super(game, "Stitch Together", "Judgment", "JUD");
  }
}

module.exports = StitchTogether;
