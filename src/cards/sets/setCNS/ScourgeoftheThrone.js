"use strict";
const Constants = require ("../../../Constants");
const ScourgeoftheThroneBase = require("../setVMA/ScourgeoftheThrone");

class ScourgeoftheThrone extends ScourgeoftheThroneBase {
  constructor (game) {
    super(game, "Scourge of the Throne", "Conspiracy", "CNS");
  }
}

module.exports = ScourgeoftheThrone;
