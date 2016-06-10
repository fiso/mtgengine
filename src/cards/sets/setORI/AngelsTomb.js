"use strict";
const Constants = require ("../../../Constants");
const AngelsTombBase = require("../setAVR/AngelsTomb");

class AngelsTomb extends AngelsTombBase {
  constructor (game) {
    super(game, "Angel's Tomb", "Magic Origins", "ORI");
  }
}

module.exports = AngelsTomb;
