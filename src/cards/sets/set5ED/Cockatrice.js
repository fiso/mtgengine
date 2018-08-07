"use strict";
const Constants = require ("../../../Constants");
const CockatriceBase = require("../setTSB/Cockatrice");

class Cockatrice extends CockatriceBase {
  constructor (game) {
    super(game, "Cockatrice", "Fifth Edition", "5ED");
  }
}

module.exports = Cockatrice;
