"use strict";
const Constants = require ("../../../Constants");
const PhyrexianWarBeastBase = require("../setALL/PhyrexianWarBeast");

class PhyrexianWarBeast extends PhyrexianWarBeastBase {
  constructor(game) {
    super(game, "Phyrexian War Beast", "Masters Edition", "MED");
  }
}

module.exports = PhyrexianWarBeast;
