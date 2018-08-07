"use strict";
const Constants = require ("../../../Constants");
const SlaveofBolasBase = require("../setE01/SlaveofBolas");

class SlaveofBolas extends SlaveofBolasBase {
  constructor (game) {
    super(game, "Slave of Bolas", "Magic Online Promos", "PRM");
  }
}

module.exports = SlaveofBolas;
