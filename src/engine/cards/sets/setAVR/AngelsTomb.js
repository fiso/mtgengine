"use strict";
const Constants = require ("../../../Constants");
const AngelsTombBase = require("../setORI/AngelsTomb");

class AngelsTomb extends AngelsTombBase {
  constructor (game) {
    super(game, "Angel's Tomb", "Avacyn Restored", "AVR");
  }
}

module.exports = AngelsTomb;
