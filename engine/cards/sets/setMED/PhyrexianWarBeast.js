"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianWarBeastBase = require("../setALL/PhyrexianWarBeast.js");

class PhyrexianWarBeast extends PhyrexianWarBeastBase {
  constructor(game) {
    super(game, "Phyrexian War Beast", "Masters Edition", "MED");
  }
}

module.exports = PhyrexianWarBeast;
