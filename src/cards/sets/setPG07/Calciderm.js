"use strict";
const Constants = require ("../../../Constants");
const CalcidermBase = require("../setEMA/Calciderm");

class Calciderm extends CalcidermBase {
  constructor (game) {
    super(game, "Calciderm", "Gateway 2007", "PG07");
  }
}

module.exports = Calciderm;
