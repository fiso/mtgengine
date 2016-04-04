"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArcumsWeathervaneBase = require("../setCST/ArcumsWeathervane.js");

class ArcumsWeathervane extends ArcumsWeathervaneBase {
  constructor(game) {
    super(game, "Arcum's Weathervane", "Ice Age", "ICE");
  }
}

module.exports = ArcumsWeathervane;
