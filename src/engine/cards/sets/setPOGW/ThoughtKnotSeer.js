"use strict";
const Constants = require ("../../../Constants");
const ThoughtKnotSeerBase = require("../setOGW/ThoughtKnotSeer");

class ThoughtKnotSeer extends ThoughtKnotSeerBase {
  constructor (game) {
    super(game, "Thought-Knot Seer", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = ThoughtKnotSeer;
