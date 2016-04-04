"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FillwithFright extends Card {
  constructor(game) {
    super(game, "Fill with Fright", "Fifth Dawn", "5DN");
  }
}

module.exports = FillwithFright;
