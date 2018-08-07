"use strict";
const Constants = require ("../../../Constants");
const PlainsBase = require("../setC18/Plains");

class Plains extends PlainsBase {
  constructor (game) {
    super(game, "Plains", "Magic Premiere Shop 2009", "PMPS09");
  }
}

module.exports = Plains;
