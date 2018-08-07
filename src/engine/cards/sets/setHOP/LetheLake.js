"use strict";
const Constants = require ("../../../Constants");
const LetheLakeBase = require("../setPCA/LetheLake");

class LetheLake extends LetheLakeBase {
  constructor (game) {
    super(game, "Lethe Lake", "Planechase", "HOP");
  }
}

module.exports = LetheLake;
