"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IceCauldronBase = require("../setICE/IceCauldron.js");

class IceCauldron extends IceCauldronBase {
  constructor(game) {
    super(game, "Ice Cauldron", "Masters Edition IV", "ME4");
  }
}

module.exports = IceCauldron;
