"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ValorMadeReal extends Card {
  constructor(game) {
    super(game, "Valor Made Real", "Dissension", "DIS");
  }
}

module.exports = ValorMadeReal;
