"use strict";
const Constants = require ("../../../Constants");
const IfhBiffEfreetBase = require("../setARN/IfhBiffEfreet");

class IfhBiffEfreet extends IfhBiffEfreetBase {
  constructor (game) {
    super(game, "Ifh-Bíff Efreet", "Masters Edition", "MED");
  }
}

module.exports = IfhBiffEfreet;
