"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FootbottomFeastBase = require("../setLRW/FootbottomFeast.js");

class FootbottomFeast extends FootbottomFeastBase {
  constructor(game) {
    super(game, "Footbottom Feast", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = FootbottomFeast;
