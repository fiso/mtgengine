"use strict";
const Constants = require ("../../../Constants");
const DispatchBase = require("../setMM2/Dispatch");

class Dispatch extends DispatchBase {
  constructor(game) {
    super(game, "Dispatch", "New Phyrexia", "NPH");
  }
}

module.exports = Dispatch;
