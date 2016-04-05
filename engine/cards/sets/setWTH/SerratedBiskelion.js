"use strict";
const Constants = require ("../../../Constants");
const SerratedBiskelionBase = require("../setDDF/SerratedBiskelion");

class SerratedBiskelion extends SerratedBiskelionBase {
  constructor(game) {
    super(game, "Serrated Biskelion", "Weatherlight", "WTH");
  }
}

module.exports = SerratedBiskelion;
