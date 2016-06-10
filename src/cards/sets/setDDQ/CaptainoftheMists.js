"use strict";
const Constants = require ("../../../Constants");
const CaptainoftheMistsBase = require("../setAVR/CaptainoftheMists");

class CaptainoftheMists extends CaptainoftheMistsBase {
  constructor (game) {
    super(game, "Captain of the Mists", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = CaptainoftheMists;
