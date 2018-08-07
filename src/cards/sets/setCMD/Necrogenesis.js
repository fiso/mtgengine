"use strict";
const Constants = require ("../../../Constants");
const NecrogenesisBase = require("../setC16/Necrogenesis");

class Necrogenesis extends NecrogenesisBase {
  constructor (game) {
    super(game, "Necrogenesis", "Commander 2011", "CMD");
  }
}

module.exports = Necrogenesis;
