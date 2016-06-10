"use strict";
const Constants = require ("../../../Constants");
const RelentlessRatsBase = require("../set5DN/RelentlessRats");

class RelentlessRats extends RelentlessRatsBase {
  constructor (game) {
    super(game, "Relentless Rats", "Magic 2011", "M11");
  }
}

module.exports = RelentlessRats;
