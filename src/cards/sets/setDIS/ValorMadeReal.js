"use strict";
const Constants = require ("../../../Constants");
const ValorMadeRealBase = require("../setCNS/ValorMadeReal");

class ValorMadeReal extends ValorMadeRealBase {
  constructor (game) {
    super(game, "Valor Made Real", "Dissension", "DIS");
  }
}

module.exports = ValorMadeReal;
