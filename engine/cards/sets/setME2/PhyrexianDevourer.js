"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianDevourerBase = require("../setALL/PhyrexianDevourer.js");

class PhyrexianDevourer extends PhyrexianDevourerBase {
  constructor(game) {
    super(game, "Phyrexian Devourer", "Masters Edition II", "ME2");
  }
}

module.exports = PhyrexianDevourer;
