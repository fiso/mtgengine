"use strict";
const Constants = require ("../../../Constants");
const LynxBase = require("../setPO2/Lynx");

class Lynx extends LynxBase {
  constructor(game) {
    super(game, "Lynx", "Starter 1999", "S99");
  }
}

module.exports = Lynx;
