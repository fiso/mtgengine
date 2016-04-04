"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShowofValorBase = require("../setM13/ShowofValor.js");

class ShowofValor extends ShowofValorBase {
  constructor(game) {
    super(game, "Show of Valor", "Magic 2014 Core Set", "M14");
  }
}

module.exports = ShowofValor;
