"use strict";
const Constants = require ("../../../Constants");
const PhyrexianRagerBase = require("../setIMA/PhyrexianRager");

class PhyrexianRager extends PhyrexianRagerBase {
  constructor (game) {
    super(game, "Phyrexian Rager", "Magazine Inserts", "PMEI");
  }
}

module.exports = PhyrexianRager;
