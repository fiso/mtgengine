"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HiddenGibbons extends Card {
  constructor(game) {
    super(game, "Hidden Gibbons", "Urza's Legacy", "ULG");
  }
}

module.exports = HiddenGibbons;
