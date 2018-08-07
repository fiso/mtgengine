"use strict";
const Constants = require ("../../../Constants");
const CalcidermBase = require("../setEMA/Calciderm");

class Calciderm extends CalcidermBase {
  constructor (game) {
    super(game, "Calciderm", "Magic Online Promos", "PRM");
  }
}

module.exports = Calciderm;
