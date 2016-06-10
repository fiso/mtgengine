"use strict";
const Constants = require ("../../../Constants");
const TaigaBase = require("../setCED/Taiga");

class Taiga extends TaigaBase {
  constructor (game) {
    super(game, "Taiga", "International Collector's Edition", "CEI");
  }
}

module.exports = Taiga;
