"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodriteInvokerBase = require("../setDDP/BloodriteInvoker.js");

class BloodriteInvoker extends BloodriteInvokerBase {
  constructor(game) {
    super(game, "Bloodrite Invoker", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = BloodriteInvoker;
