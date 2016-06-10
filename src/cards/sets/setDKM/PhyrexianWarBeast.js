"use strict";
const Constants = require ("../../../Constants");
const PhyrexianWarBeastBase = require("../setALL/PhyrexianWarBeast");

class PhyrexianWarBeast extends PhyrexianWarBeastBase {
  constructor (game) {
    super(game, "Phyrexian War Beast", "Deckmasters", "DKM");
  }
}

module.exports = PhyrexianWarBeast;
