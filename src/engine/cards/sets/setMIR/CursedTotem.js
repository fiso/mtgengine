"use strict";
const Constants = require ("../../../Constants");
const CursedTotemBase = require("../setWC00/CursedTotem");

class CursedTotem extends CursedTotemBase {
  constructor (game) {
    super(game, "Cursed Totem", "Mirage", "MIR");
  }
}

module.exports = CursedTotem;
