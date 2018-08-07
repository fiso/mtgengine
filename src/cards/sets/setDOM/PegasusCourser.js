"use strict";
const Constants = require ("../../../Constants");
const PegasusCourserBase = require("../setM19/PegasusCourser");

class PegasusCourser extends PegasusCourserBase {
  constructor (game) {
    super(game, "Pegasus Courser", "Dominaria", "DOM");
  }
}

module.exports = PegasusCourser;
