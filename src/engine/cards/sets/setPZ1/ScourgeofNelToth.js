"use strict";
const Constants = require ("../../../Constants");
const ScourgeofNelTothBase = require("../setCMA/ScourgeofNelToth");

class ScourgeofNelToth extends ScourgeofNelTothBase {
  constructor (game) {
    super(game, "Scourge of Nel Toth", "Legendary Cube", "PZ1");
  }
}

module.exports = ScourgeofNelToth;
