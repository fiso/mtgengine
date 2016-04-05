"use strict";
const Constants = require ("../../../Constants");
const PlatinumAngelBase = require("../setV15/PlatinumAngel");

class PlatinumAngel extends PlatinumAngelBase {
  constructor(game) {
    super(game, "Platinum Angel", "Tenth Edition", "10E");
  }
}

module.exports = PlatinumAngel;
