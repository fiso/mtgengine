"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalasExplorer extends UnimplementedCard {
  constructor (game) {
    super(game, "Talas Explorer", "Portal Second Age", "P02");
  }
}

module.exports = TalasExplorer;
