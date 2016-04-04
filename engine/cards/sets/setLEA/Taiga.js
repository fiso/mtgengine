"use strict";
const Constants = require ("../../../Constants");
const TaigaBase = require("../setCED/Taiga");

class Taiga extends TaigaBase {
  constructor(game) {
    super(game, "Taiga", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Taiga;
