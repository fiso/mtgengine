"use strict";
const Constants = require ("../../../Constants");
const OranRiefInvokerBase = require("../setDDR/OranRiefInvoker");

class OranRiefInvoker extends OranRiefInvokerBase {
  constructor (game) {
    super(game, "Oran-Rief Invoker", "Battle for Zendikar", "BFZ");
  }
}

module.exports = OranRiefInvoker;
