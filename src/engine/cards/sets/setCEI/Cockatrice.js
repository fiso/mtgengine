"use strict";
const Constants = require ("../../../Constants");
const CockatriceBase = require("../setTSB/Cockatrice");

class Cockatrice extends CockatriceBase {
  constructor (game) {
    super(game, "Cockatrice", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Cockatrice;
