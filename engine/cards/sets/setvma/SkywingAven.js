"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkywingAvenBase = require("../setTOR/SkywingAven.js");

class SkywingAven extends SkywingAvenBase {
  constructor(game) {
    super(game, "Skywing Aven", "Vintage Masters", "VMA");
  }
}

module.exports = SkywingAven;
