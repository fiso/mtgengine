"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DandânBase = require("../setARN/Dandân.js");

class Dandân extends DandânBase {
  constructor(game) {
    super(game, "Dandân", "Chronicles", "CHR");
  }
}

module.exports = Dandân;
