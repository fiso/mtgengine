"use strict";
const Constants = require ("../../../Constants");
const ArcumsWeathervaneBase = require("../setCST/ArcumsWeathervane");

class ArcumsWeathervane extends ArcumsWeathervaneBase {
  constructor(game) {
    super(game, "Arcum's Weathervane", "Ice Age", "ICE");
  }
}

module.exports = ArcumsWeathervane;
