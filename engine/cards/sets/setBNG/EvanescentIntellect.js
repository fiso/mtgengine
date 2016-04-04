"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EvanescentIntellect extends UnimplementedCard {
  constructor(game) {
    super(game, "Evanescent Intellect", "Born of the Gods", "BNG");
  }
}

module.exports = EvanescentIntellect;
