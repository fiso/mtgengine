"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TriskelionBase = require("../setATQ/Triskelion.js");

class Triskelion extends TriskelionBase {
  constructor(game) {
    super(game, "Triskelion", "Magic 2011", "M11");
  }
}

module.exports = Triskelion;
