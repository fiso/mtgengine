"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalasExplorer extends UnimplementedCard {
  constructor (game) {
    super(game, "Talas Explorer", "Portal Second Age", "PO2");
  }
}

module.exports = TalasExplorer;
