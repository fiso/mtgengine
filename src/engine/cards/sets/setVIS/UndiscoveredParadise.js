"use strict";
const Constants = require ("../../../Constants");
const UndiscoveredParadiseBase = require("../setPRM/UndiscoveredParadise");

class UndiscoveredParadise extends UndiscoveredParadiseBase {
  constructor (game) {
    super(game, "Undiscovered Paradise", "Visions", "VIS");
  }
}

module.exports = UndiscoveredParadise;
