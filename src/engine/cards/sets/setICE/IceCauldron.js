"use strict";
const Constants = require ("../../../Constants");
const IceCauldronBase = require("../setME4/IceCauldron");

class IceCauldron extends IceCauldronBase {
  constructor (game) {
    super(game, "Ice Cauldron", "Ice Age", "ICE");
  }
}

module.exports = IceCauldron;
