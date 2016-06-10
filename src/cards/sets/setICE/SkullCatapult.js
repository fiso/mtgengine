"use strict";
const Constants = require ("../../../Constants");
const SkullCatapultBase = require("../set6ED/SkullCatapult");

class SkullCatapult extends SkullCatapultBase {
  constructor (game) {
    super(game, "Skull Catapult", "Ice Age", "ICE");
  }
}

module.exports = SkullCatapult;
