"use strict";
const Constants = require ("../../../Constants");
const PhyrexianWarBeastBase = require("../setMED/PhyrexianWarBeast");

class PhyrexianWarBeast extends PhyrexianWarBeastBase {
  constructor (game) {
    super(game, "Phyrexian War Beast", "Alliances", "ALL");
  }
}

module.exports = PhyrexianWarBeast;
