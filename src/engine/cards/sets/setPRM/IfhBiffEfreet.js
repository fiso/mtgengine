"use strict";
const Constants = require ("../../../Constants");
const IfhBiffEfreetBase = require("../setMED/IfhBiffEfreet");

class IfhBiffEfreet extends IfhBiffEfreetBase {
  constructor (game) {
    super(game, "Ifh-Bíff Efreet", "Magic Online Promos", "PRM");
  }
}

module.exports = IfhBiffEfreet;
