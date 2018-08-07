"use strict";
const Constants = require ("../../../Constants");
const MarisisTwinclawsBase = require("../setDDH/MarisisTwinclaws");

class MarisisTwinclaws extends MarisisTwinclawsBase {
  constructor (game) {
    super(game, "Marisi's Twinclaws", "Wizards Play Network 2009", "PWP09");
  }
}

module.exports = MarisisTwinclaws;
