"use strict";
const Constants = require ("../../../Constants");
const KormusBellBase = require("../setME4/KormusBell");

class KormusBell extends KormusBellBase {
  constructor (game) {
    super(game, "Kormus Bell", "Fourth Edition", "4ED");
  }
}

module.exports = KormusBell;
