"use strict";
const Constants = require ("../../../Constants");
const CoralAtollBase = require("../setC14/CoralAtoll");

class CoralAtoll extends CoralAtollBase {
  constructor (game) {
    super(game, "Coral Atoll", "Visions", "VIS");
  }
}

module.exports = CoralAtoll;
