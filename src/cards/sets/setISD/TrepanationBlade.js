"use strict";
const Constants = require ("../../../Constants");
const TrepanationBladeBase = require("../setIMA/TrepanationBlade");

class TrepanationBlade extends TrepanationBladeBase {
  constructor (game) {
    super(game, "Trepanation Blade", "Innistrad", "ISD");
  }
}

module.exports = TrepanationBlade;
