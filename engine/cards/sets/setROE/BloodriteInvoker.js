"use strict";
const Constants = require ("../../../Constants");
const BloodriteInvokerBase = require("../setDDP/BloodriteInvoker");

class BloodriteInvoker extends BloodriteInvokerBase {
  constructor(game) {
    super(game, "Bloodrite Invoker", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = BloodriteInvoker;
