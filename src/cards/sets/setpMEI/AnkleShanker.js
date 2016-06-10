"use strict";
const Constants = require ("../../../Constants");
const AnkleShankerBase = require("../setKTK/AnkleShanker");

class AnkleShanker extends AnkleShankerBase {
  constructor (game) {
    super(game, "Ankle Shanker", "Media Inserts", "pMEI");
  }
}

module.exports = AnkleShanker;
