"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VarchildsCrusaderBase = require("../setALL/VarchildsCrusader.js");

class VarchildsCrusader extends VarchildsCrusaderBase {
  constructor(game) {
    super(game, "Varchild's Crusader", "Masters Edition II", "ME2");
  }
}

module.exports = VarchildsCrusader;
