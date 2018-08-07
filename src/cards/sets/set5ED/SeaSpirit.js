"use strict";
const Constants = require ("../../../Constants");
const SeaSpiritBase = require("../setME2/SeaSpirit");

class SeaSpirit extends SeaSpiritBase {
  constructor (game) {
    super(game, "Sea Spirit", "Fifth Edition", "5ED");
  }
}

module.exports = SeaSpirit;
