"use strict";
const Constants = require ("../../../Constants");
const WillKenrithBase = require("../setPBBD/WillKenrith");

class WillKenrith extends WillKenrithBase {
  constructor (game) {
    super(game, "Will Kenrith", "Battlebond", "BBD");
  }
}

module.exports = WillKenrith;
