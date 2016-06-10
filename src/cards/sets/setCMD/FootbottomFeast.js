"use strict";
const Constants = require ("../../../Constants");
const FootbottomFeastBase = require("../setLRW/FootbottomFeast");

class FootbottomFeast extends FootbottomFeastBase {
  constructor (game) {
    super(game, "Footbottom Feast", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = FootbottomFeast;
