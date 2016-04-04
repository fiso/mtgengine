"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThoughtKnotSeer extends UnimplementedCard {
  constructor(game) {
    super(game, "Thought-Knot Seer", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ThoughtKnotSeer;
