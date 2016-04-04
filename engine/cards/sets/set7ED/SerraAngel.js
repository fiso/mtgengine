"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SerraAngelBase = require("../setATH/SerraAngel.js");

class SerraAngel extends SerraAngelBase {
  constructor(game) {
    super(game, "Serra Angel", "Seventh Edition", "7ED");
  }
}

module.exports = SerraAngel;
