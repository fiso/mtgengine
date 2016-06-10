"use strict";
const Constants = require ("../../../Constants");
const PlainsBase = require("../setATH/Plains");

class Plains extends PlainsBase {
  constructor (game) {
    super(game, "Plains", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Plains;
