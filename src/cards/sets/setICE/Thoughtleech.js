"use strict";
const Constants = require ("../../../Constants");
const ThoughtleechBase = require("../set7ED/Thoughtleech");

class Thoughtleech extends ThoughtleechBase {
  constructor (game) {
    super(game, "Thoughtleech", "Ice Age", "ICE");
  }
}

module.exports = Thoughtleech;
