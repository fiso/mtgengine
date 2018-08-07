"use strict";
const Constants = require ("../../../Constants");
const StarlightInvokerBase = require("../set10E/StarlightInvoker");

class StarlightInvoker extends StarlightInvokerBase {
  constructor (game) {
    super(game, "Starlight Invoker", "Legions", "LGN");
  }
}

module.exports = StarlightInvoker;
