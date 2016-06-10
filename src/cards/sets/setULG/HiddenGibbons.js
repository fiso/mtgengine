"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HiddenGibbons extends UnimplementedCard {
  constructor (game) {
    super(game, "Hidden Gibbons", "Urza's Legacy", "ULG");
  }
}

module.exports = HiddenGibbons;
