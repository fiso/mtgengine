"use strict";
const Constants = require ("../../../Constants");
const MirariBase = require("../setC13/Mirari");

class Mirari extends MirariBase {
  constructor (game) {
    super(game, "Mirari", "World Championship Decks 2003", "WC03");
  }
}

module.exports = Mirari;
