"use strict";
const Constants = require ("../../../Constants");
const CockatriceBase = require("../setTSB/Cockatrice");

class Cockatrice extends CockatriceBase {
  constructor (game) {
    super(game, "Cockatrice", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Cockatrice;
