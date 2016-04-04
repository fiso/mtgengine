"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SlaveofBolasBase = require("../setARB/SlaveofBolas.js");

class SlaveofBolas extends SlaveofBolasBase {
  constructor(game) {
    super(game, "Slave of Bolas", "WPN and Gateway", "pWPN");
  }
}

module.exports = SlaveofBolas;
