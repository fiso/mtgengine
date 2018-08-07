"use strict";
const Constants = require ("../../../Constants");
const SlaveofBolasBase = require("../setE01/SlaveofBolas");

class SlaveofBolas extends SlaveofBolasBase {
  constructor (game) {
    super(game, "Slave of Bolas", "Alara Reborn", "ARB");
  }
}

module.exports = SlaveofBolas;
