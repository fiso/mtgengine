"use strict";
const Constants = require ("../../../Constants");
const MagmaticChasmBase = require("../setSOI/MagmaticChasm");

class MagmaticChasm extends MagmaticChasmBase {
  constructor (game) {
    super(game, "Magmatic Chasm", "Dragons of Tarkir", "DTK");
  }
}

module.exports = MagmaticChasm;
