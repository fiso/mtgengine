"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThoughtleechBase = require("../setICE/Thoughtleech.js");

class Thoughtleech extends ThoughtleechBase {
  constructor(game) {
    super(game, "Thoughtleech", "Seventh Edition", "7ED");
  }
}

module.exports = Thoughtleech;
