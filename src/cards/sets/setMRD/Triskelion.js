"use strict";
const Constants = require ("../../../Constants");
const TriskelionBase = require("../setATQ/Triskelion");

class Triskelion extends TriskelionBase {
  constructor(game) {
    super(game, "Triskelion", "Mirrodin", "MRD");
  }
}

module.exports = Triskelion;
