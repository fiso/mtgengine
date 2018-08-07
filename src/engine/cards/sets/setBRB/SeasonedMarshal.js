"use strict";
const Constants = require ("../../../Constants");
const SeasonedMarshalBase = require("../setDDF/SeasonedMarshal");

class SeasonedMarshal extends SeasonedMarshalBase {
  constructor (game) {
    super(game, "Seasoned Marshal", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SeasonedMarshal;
