"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShowofValor extends Card {
  constructor(game) {
    super(game, "Show of Valor", "Magic 2013", "M13");
  }
}

module.exports = ShowofValor;
