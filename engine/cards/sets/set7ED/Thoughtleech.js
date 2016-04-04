"use strict";
const Constants = require ("../../../Constants");
const ThoughtleechBase = require("../setICE/Thoughtleech");

class Thoughtleech extends ThoughtleechBase {
  constructor(game) {
    super(game, "Thoughtleech", "Seventh Edition", "7ED");
  }
}

module.exports = Thoughtleech;
