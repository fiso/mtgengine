"use strict";
const Constants = require ("../../../Constants");
const PoreOverthePagesBase = require("../setSOI/PoreOverthePages");

class PoreOverthePages extends PoreOverthePagesBase {
  constructor (game) {
    super(game, "Pore Over the Pages", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = PoreOverthePages;
