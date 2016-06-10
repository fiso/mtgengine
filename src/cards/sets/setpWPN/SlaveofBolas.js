"use strict";
const Constants = require ("../../../Constants");
const SlaveofBolasBase = require("../setARB/SlaveofBolas");

class SlaveofBolas extends SlaveofBolasBase {
  constructor (game) {
    super(game, "Slave of Bolas", "WPN and Gateway", "pWPN");
  }
}

module.exports = SlaveofBolas;
