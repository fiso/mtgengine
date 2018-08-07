"use strict";
const Constants = require ("../../../Constants");
const NecrobiteBase = require("../setM15/Necrobite");

class Necrobite extends NecrobiteBase {
  constructor (game) {
    super(game, "Necrobite", "Avacyn Restored", "AVR");
  }
}

module.exports = Necrobite;
