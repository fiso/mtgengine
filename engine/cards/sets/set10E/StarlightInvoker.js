"use strict";
const Constants = require ("../../../Constants");
const StarlightInvokerBase = require("../setLGN/StarlightInvoker");

class StarlightInvoker extends StarlightInvokerBase {
  constructor(game) {
    super(game, "Starlight Invoker", "Tenth Edition", "10E");
  }
}

module.exports = StarlightInvoker;
