"use strict";
const Constants = require ("../../../Constants");
const ShowofValorBase = require("../setM14/ShowofValor");

class ShowofValor extends ShowofValorBase {
  constructor (game) {
    super(game, "Show of Valor", "Magic 2013", "M13");
  }
}

module.exports = ShowofValor;
