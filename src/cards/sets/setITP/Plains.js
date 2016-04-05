"use strict";
const Constants = require ("../../../Constants");
const PlainsBase = require("../setATH/Plains");

class Plains extends PlainsBase {
  constructor(game) {
    super(game, "Plains", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = Plains;
