"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurdenofGuilt extends UnimplementedCard {
  constructor(game) {
    super(game, "Burden of Guilt", "Dark Ascension", "DKA");
  }
}

module.exports = BurdenofGuilt;
