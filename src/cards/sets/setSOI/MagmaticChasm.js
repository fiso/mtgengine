"use strict";
const Constants = require ("../../../Constants");
const MagmaticChasmBase = require("../setDTK/MagmaticChasm");

class MagmaticChasm extends MagmaticChasmBase {
  constructor (game) {
    super(game, "Magmatic Chasm", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MagmaticChasm;
