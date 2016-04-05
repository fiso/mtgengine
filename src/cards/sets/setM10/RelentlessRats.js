"use strict";
const Constants = require ("../../../Constants");
const RelentlessRatsBase = require("../set5DN/RelentlessRats");

class RelentlessRats extends RelentlessRatsBase {
  constructor(game) {
    super(game, "Relentless Rats", "Magic 2010", "M10");
  }
}

module.exports = RelentlessRats;
