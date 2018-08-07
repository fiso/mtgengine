"use strict";
const Constants = require ("../../../Constants");
const CockatriceBase = require("../setTSB/Cockatrice");

class Cockatrice extends CockatriceBase {
  constructor (game) {
    super(game, "Cockatrice", "Fourth Edition", "4ED");
  }
}

module.exports = Cockatrice;
