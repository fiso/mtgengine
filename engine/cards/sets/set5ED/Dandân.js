"use strict";
const Constants = require ("../../../Constants");
const DandânBase = require("../setARN/Dandân");

class Dandân extends DandânBase {
  constructor(game) {
    super(game, "Dandân", "Fifth Edition", "5ED");
  }
}

module.exports = Dandân;
