"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GaseousForm extends UnimplementedCard {
  constructor(game) {
    super(game, "Gaseous Form", "Beatdown Box Set", "BTD");
  }
}

module.exports = GaseousForm;
