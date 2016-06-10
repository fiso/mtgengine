"use strict";
const Constants = require ("../../../Constants");
const TaigaBase = require("../setCED/Taiga");

class Taiga extends TaigaBase {
  constructor (game) {
    super(game, "Taiga", "Masters Edition II", "ME2");
  }
}

module.exports = Taiga;
