"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlamewaveInvokerBase = require("../setDD3_EVG/FlamewaveInvoker.js");

class FlamewaveInvoker extends FlamewaveInvokerBase {
  constructor(game) {
    super(game, "Flamewave Invoker", "Tenth Edition", "10E");
  }
}

module.exports = FlamewaveInvoker;
