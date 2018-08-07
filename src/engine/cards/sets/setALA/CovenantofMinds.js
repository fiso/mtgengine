"use strict";
const Constants = require ("../../../Constants");
const CovenantofMindsBase = require("../setCN2/CovenantofMinds");

class CovenantofMinds extends CovenantofMindsBase {
  constructor (game) {
    super(game, "Covenant of Minds", "Shards of Alara", "ALA");
  }
}

module.exports = CovenantofMinds;
