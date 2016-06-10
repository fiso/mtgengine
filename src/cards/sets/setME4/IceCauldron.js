"use strict";
const Constants = require ("../../../Constants");
const IceCauldronBase = require("../setICE/IceCauldron");

class IceCauldron extends IceCauldronBase {
  constructor (game) {
    super(game, "Ice Cauldron", "Masters Edition IV", "ME4");
  }
}

module.exports = IceCauldron;
