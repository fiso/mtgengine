"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BidentofThassaBase = require("../setC15/BidentofThassa.js");

class BidentofThassa extends BidentofThassaBase {
  constructor(game) {
    super(game, "Bident of Thassa", "Launch Parties", "pLPA");
  }
}

module.exports = BidentofThassa;
