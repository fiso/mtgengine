"use strict";
const Constants = require ("../../../Constants");
const AvacynAngelofHopeBase = require("../setIMA/AvacynAngelofHope");

class AvacynAngelofHope extends AvacynAngelofHopeBase {
  constructor (game) {
    super(game, "Avacyn, Angel of Hope", "Magic Online Promos", "PRM");
  }
}

module.exports = AvacynAngelofHope;
