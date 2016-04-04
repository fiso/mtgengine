"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlainsBase = require("../setATH/Plains.js");

class Plains extends PlainsBase {
  constructor(game) {
    super(game, "Plains", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Plains;
