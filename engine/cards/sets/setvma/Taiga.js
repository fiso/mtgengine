"use strict";
const Constants = require ("../../../Constants");
const TaigaBase = require("../setCED/Taiga");

class Taiga extends TaigaBase {
  constructor(game) {
    super(game, "Taiga", "Vintage Masters", "VMA");
  }
}

module.exports = Taiga;
