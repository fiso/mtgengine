"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SigiloftheEmptyThroneBase = require("../setC15/SigiloftheEmptyThrone.js");

class SigiloftheEmptyThrone extends SigiloftheEmptyThroneBase {
  constructor(game) {
    super(game, "Sigil of the Empty Throne", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = SigiloftheEmptyThrone;
