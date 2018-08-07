"use strict";
const Constants = require ("../../../Constants");
const NecrogenesisBase = require("../setC16/Necrogenesis");

class Necrogenesis extends NecrogenesisBase {
  constructor (game) {
    super(game, "Necrogenesis", "Modern Masters 2015", "MM2");
  }
}

module.exports = Necrogenesis;
