"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EmeriaAngelBase = require("../setpWPN/EmeriaAngel.js");

class EmeriaAngel extends EmeriaAngelBase {
  constructor(game) {
    super(game, "Emeria Angel", "Zendikar", "ZEN");
  }
}

module.exports = EmeriaAngel;
