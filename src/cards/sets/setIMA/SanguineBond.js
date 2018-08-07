"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SanguineBond extends UnimplementedCard {
  constructor (game) {
    super(game, "Sanguine Bond", "Iconic Masters", "IMA");
  }
}

module.exports = SanguineBond;
