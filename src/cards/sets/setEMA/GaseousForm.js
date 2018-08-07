"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GaseousForm extends UnimplementedCard {
  constructor (game) {
    super(game, "Gaseous Form", "Eternal Masters", "EMA");
  }
}

module.exports = GaseousForm;
