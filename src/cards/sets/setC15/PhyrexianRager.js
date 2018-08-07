"use strict";
const Constants = require ("../../../Constants");
const PhyrexianRagerBase = require("../setIMA/PhyrexianRager");

class PhyrexianRager extends PhyrexianRagerBase {
  constructor (game) {
    super(game, "Phyrexian Rager", "Commander 2015", "C15");
  }
}

module.exports = PhyrexianRager;
