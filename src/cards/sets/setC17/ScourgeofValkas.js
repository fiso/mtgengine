"use strict";
const Constants = require ("../../../Constants");
const ScourgeofValkasBase = require("../setIMA/ScourgeofValkas");

class ScourgeofValkas extends ScourgeofValkasBase {
  constructor (game) {
    super(game, "Scourge of Valkas", "Commander 2017", "C17");
  }
}

module.exports = ScourgeofValkas;
