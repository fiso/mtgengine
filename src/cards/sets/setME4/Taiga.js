"use strict";
const Constants = require ("../../../Constants");
const TaigaBase = require("../setCED/Taiga");

class Taiga extends TaigaBase {
  constructor (game) {
    super(game, "Taiga", "Masters Edition IV", "ME4");
  }
}

module.exports = Taiga;
