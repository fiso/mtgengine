"use strict";
const Constants = require ("../../../Constants");
const VirtustheVeiledBase = require("../setPBBD/VirtustheVeiled");

class VirtustheVeiled extends VirtustheVeiledBase {
  constructor (game) {
    super(game, "Virtus the Veiled", "Battlebond", "BBD");
  }
}

module.exports = VirtustheVeiled;
