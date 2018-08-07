"use strict";
const Constants = require ("../../../Constants");
const AvacynAngelofHopeBase = require("../setIMA/AvacynAngelofHope");

class AvacynAngelofHope extends AvacynAngelofHopeBase {
  constructor (game) {
    super(game, "Avacyn, Angel of Hope", "Open the Helvault", "PHEL");
  }
}

module.exports = AvacynAngelofHope;
