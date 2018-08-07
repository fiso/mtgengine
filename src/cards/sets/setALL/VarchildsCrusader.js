"use strict";
const Constants = require ("../../../Constants");
const VarchildsCrusaderBase = require("../setME2/VarchildsCrusader");

class VarchildsCrusader extends VarchildsCrusaderBase {
  constructor (game) {
    super(game, "Varchild's Crusader", "Alliances", "ALL");
  }
}

module.exports = VarchildsCrusader;
