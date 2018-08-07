"use strict";
const Constants = require ("../../../Constants");
const UndertakerBase = require("../setTSB/Undertaker");

class Undertaker extends UndertakerBase {
  constructor (game) {
    super(game, "Undertaker", "Mercadian Masques", "MMQ");
  }
}

module.exports = Undertaker;
