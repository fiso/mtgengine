"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerfolkWizard extends UnimplementedCard {
  constructor (game) {
    super(game, "Merfolk Wizard", "Lorwyn Tokens", "TLRW");
  }
}

module.exports = MerfolkWizard;
