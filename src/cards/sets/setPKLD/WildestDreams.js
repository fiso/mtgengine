"use strict";
const Constants = require ("../../../Constants");
const WildestDreamsBase = require("../setKLD/WildestDreams");

class WildestDreams extends WildestDreamsBase {
  constructor (game) {
    super(game, "Wildest Dreams", "Kaladesh Promos", "PKLD");
  }
}

module.exports = WildestDreams;
