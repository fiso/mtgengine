"use strict";
const Constants = require ("../../../Constants");
const RecoilBase = require("../setDDH/Recoil");

class Recoil extends RecoilBase {
  constructor (game) {
    super(game, "Recoil", "World Championship Decks 2002", "WC02");
  }
}

module.exports = Recoil;
