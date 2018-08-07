"use strict";
const Constants = require ("../../../Constants");
const FootbottomFeastBase = require("../setCMD/FootbottomFeast");

class FootbottomFeast extends FootbottomFeastBase {
  constructor (game) {
    super(game, "Footbottom Feast", "Lorwyn", "LRW");
  }
}

module.exports = FootbottomFeast;
