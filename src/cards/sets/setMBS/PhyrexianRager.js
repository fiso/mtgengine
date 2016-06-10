"use strict";
const Constants = require ("../../../Constants");
const PhyrexianRagerBase = require("../setAPC/PhyrexianRager");

class PhyrexianRager extends PhyrexianRagerBase {
  constructor (game) {
    super(game, "Phyrexian Rager", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PhyrexianRager;
