"use strict";
const Constants = require ("../../../Constants");
const RowanKenrithBase = require("../setPBBD/RowanKenrith");

class RowanKenrith extends RowanKenrithBase {
  constructor (game) {
    super(game, "Rowan Kenrith", "Battlebond", "BBD");
  }
}

module.exports = RowanKenrith;
