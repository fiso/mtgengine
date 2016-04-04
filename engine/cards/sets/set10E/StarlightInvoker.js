"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StarlightInvokerBase = require("../setLGN/StarlightInvoker.js");

class StarlightInvoker extends StarlightInvokerBase {
  constructor(game) {
    super(game, "Starlight Invoker", "Tenth Edition", "10E");
  }
}

module.exports = StarlightInvoker;
