"use strict";
const Constants = require ("../../../Constants");
const LynxBase = require("../setS99/Lynx");

class Lynx extends LynxBase {
  constructor (game) {
    super(game, "Lynx", "Portal Second Age", "P02");
  }
}

module.exports = Lynx;
