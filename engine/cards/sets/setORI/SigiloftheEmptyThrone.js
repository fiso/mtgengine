"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SigiloftheEmptyThroneBase = require("../setC15/SigiloftheEmptyThrone.js");

class SigiloftheEmptyThrone extends SigiloftheEmptyThroneBase {
  constructor(game) {
    super(game, "Sigil of the Empty Throne", "Magic Origins", "ORI");
  }
}

module.exports = SigiloftheEmptyThrone;
