"use strict";
const Constants = require ("../../../Constants");
const DandânBase = require("../setARN/Dandân");

class Dandân extends DandânBase {
  constructor(game) {
    super(game, "Dandân", "Chronicles", "CHR");
  }
}

module.exports = Dandân;
