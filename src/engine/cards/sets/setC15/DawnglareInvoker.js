"use strict";
const Constants = require ("../../../Constants");
const DawnglareInvokerBase = require("../setCM2/DawnglareInvoker");

class DawnglareInvoker extends DawnglareInvokerBase {
  constructor (game) {
    super(game, "Dawnglare Invoker", "Commander 2015", "C15");
  }
}

module.exports = DawnglareInvoker;
