"use strict";
const Constants = require ("../../../Constants");
const StonewoodInvokerBase = require("../setEVG/StonewoodInvoker");

class StonewoodInvoker extends StonewoodInvokerBase {
  constructor (game) {
    super(game, "Stonewood Invoker", "Legions", "LGN");
  }
}

module.exports = StonewoodInvoker;
