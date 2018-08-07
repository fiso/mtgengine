"use strict";
const Constants = require ("../../../Constants");
const SeasonedMarshalBase = require("../setDDF/SeasonedMarshal");

class SeasonedMarshal extends SeasonedMarshalBase {
  constructor (game) {
    super(game, "Seasoned Marshal", "Ninth Edition", "9ED");
  }
}

module.exports = SeasonedMarshal;
