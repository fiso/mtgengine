"use strict";
const Constants = require ("../../../Constants");
const ArachnogenesisBase = require("../setPZ1/Arachnogenesis");

class Arachnogenesis extends ArachnogenesisBase {
  constructor (game) {
    super(game, "Arachnogenesis", "Commander 2015", "C15");
  }
}

module.exports = Arachnogenesis;
