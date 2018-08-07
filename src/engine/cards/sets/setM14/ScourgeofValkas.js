"use strict";
const Constants = require ("../../../Constants");
const ScourgeofValkasBase = require("../setIMA/ScourgeofValkas");

class ScourgeofValkas extends ScourgeofValkasBase {
  constructor (game) {
    super(game, "Scourge of Valkas", "Magic 2014", "M14");
  }
}

module.exports = ScourgeofValkas;
