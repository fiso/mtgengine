"use strict";
const Constants = require ("../../../Constants");
const EaterofHopeBase = require("../setCMA/EaterofHope");

class EaterofHope extends EaterofHopeBase {
  constructor (game) {
    super(game, "Eater of Hope", "Magic Online Promos", "PRM");
  }
}

module.exports = EaterofHope;
