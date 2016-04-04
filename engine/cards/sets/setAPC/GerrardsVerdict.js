"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GerrardsVerdict extends Card {
  constructor(game) {
    super(game, "Gerrard's Verdict", "Apocalypse", "APC");
  }
}

module.exports = GerrardsVerdict;
