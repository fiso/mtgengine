"use strict";
const Constants = require ("../../../Constants");
const TriskelionBase = require("../setDDF/Triskelion");

class Triskelion extends TriskelionBase {
  constructor (game) {
    super(game, "Triskelion", "Antiquities", "ATQ");
  }
}

module.exports = Triskelion;
