"use strict";
const Constants = require ("../../../Constants");
const RelentlessRatsBase = require("../set5DN/RelentlessRats");

class RelentlessRats extends RelentlessRatsBase {
  constructor(game) {
    super(game, "Relentless Rats", "Tenth Edition", "10E");
  }
}

module.exports = RelentlessRats;
