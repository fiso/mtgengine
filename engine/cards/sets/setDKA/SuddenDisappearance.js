"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuddenDisappearance extends UnimplementedCard {
  constructor(game) {
    super(game, "Sudden Disappearance", "Dark Ascension", "DKA");
  }
}

module.exports = SuddenDisappearance;
