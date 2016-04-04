"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Valor extends Card {
  constructor(game) {
    super(game, "Valor", "Judgment", "JUD");
  }
}

module.exports = Valor;
