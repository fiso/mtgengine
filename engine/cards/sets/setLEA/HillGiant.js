"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HillGiantBase = require("../setCED/HillGiant.js");

class HillGiant extends HillGiantBase {
  constructor(game) {
    super(game, "Hill Giant", "Limited Edition Alpha", "LEA");
  }
}

module.exports = HillGiant;
