"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThoughtKnotSeer extends Card {
  constructor(game) {
    super(game, "Thought-Knot Seer", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ThoughtKnotSeer;
