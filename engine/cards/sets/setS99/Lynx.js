"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LynxBase = require("../setPO2/Lynx.js");

class Lynx extends LynxBase {
  constructor(game) {
    super(game, "Lynx", "Starter 1999", "S99");
  }
}

module.exports = Lynx;
