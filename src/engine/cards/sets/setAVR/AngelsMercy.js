"use strict";
const Constants = require ("../../../Constants");
const AngelsMercyBase = require("../setM13/AngelsMercy");

class AngelsMercy extends AngelsMercyBase {
  constructor (game) {
    super(game, "Angel's Mercy", "Avacyn Restored", "AVR");
  }
}

module.exports = AngelsMercy;
