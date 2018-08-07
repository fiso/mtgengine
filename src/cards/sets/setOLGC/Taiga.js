"use strict";
const Constants = require ("../../../Constants");
const TaigaBase = require("../setVMA/Taiga");

class Taiga extends TaigaBase {
  constructor (game) {
    super(game, "Taiga", "Legacy Championship", "OLGC");
  }
}

module.exports = Taiga;
