"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhylacteryLichBase = require("../setM11/PhylacteryLich.js");

class PhylacteryLich extends PhylacteryLichBase {
  constructor(game) {
    super(game, "Phylactery Lich", "Magic 2013", "M13");
  }
}

module.exports = PhylacteryLich;
