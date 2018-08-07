"use strict";
const Constants = require ("../../../Constants");
const IfhBiffEfreetBase = require("../setMED/IfhBiffEfreet");

class IfhBiffEfreet extends IfhBiffEfreetBase {
  constructor (game) {
    super(game, "Ifh-Bíff Efreet", "Arabian Nights", "ARN");
  }
}

module.exports = IfhBiffEfreet;
