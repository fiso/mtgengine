"use strict";
const Constants = require ("../../../Constants");
const PlainsBase = require("../setC18/Plains");

class Plains extends PlainsBase {
  constructor (game) {
    super(game, "Plains", "M19 Standard Showdown", "PSS3");
  }
}

module.exports = Plains;
