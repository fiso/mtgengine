"use strict";
const Constants = require ("../../../Constants");
const TerrorBase = require("../setATH/Terror");

class Terror extends TerrorBase {
  constructor (game) {
    super(game, "Terror", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = Terror;
