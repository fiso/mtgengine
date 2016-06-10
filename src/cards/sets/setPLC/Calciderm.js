"use strict";
const Constants = require ("../../../Constants");
const CalcidermBase = require("../setpGTW/Calciderm");

class Calciderm extends CalcidermBase {
  constructor (game) {
    super(game, "Calciderm", "Planar Chaos", "PLC");
  }
}

module.exports = Calciderm;
