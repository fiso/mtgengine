"use strict";
const Constants = require ("../../../Constants");
const AvacynAngelofHopeBase = require("../setIMA/AvacynAngelofHope");

class AvacynAngelofHope extends AvacynAngelofHopeBase {
  constructor (game) {
    super(game, "Avacyn, Angel of Hope", "Avacyn Restored", "AVR");
  }
}

module.exports = AvacynAngelofHope;
