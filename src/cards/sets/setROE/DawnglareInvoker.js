"use strict";
const Constants = require ("../../../Constants");
const DawnglareInvokerBase = require("../setCM2/DawnglareInvoker");

class DawnglareInvoker extends DawnglareInvokerBase {
  constructor (game) {
    super(game, "Dawnglare Invoker", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = DawnglareInvoker;
