"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AegisAngelBase = require("../setM12/AegisAngel.js");

class AegisAngel extends AegisAngelBase {
  constructor(game) {
    super(game, "Aegis Angel", "Magic Origins", "ORI");
  }
}

module.exports = AegisAngel;
