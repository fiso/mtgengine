"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MagmaticChasmBase = require("../setDTK/MagmaticChasm.js");

class MagmaticChasm extends MagmaticChasmBase {
  constructor(game) {
    super(game, "Magmatic Chasm", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MagmaticChasm;
