"use strict";
const Constants = require ("../../../Constants");
const TriskelionBase = require("../setATQ/Triskelion");

class Triskelion extends TriskelionBase {
  constructor (game) {
    super(game, "Triskelion", "Magic 2011", "M11");
  }
}

module.exports = Triskelion;
