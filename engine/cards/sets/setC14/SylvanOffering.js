"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SylvanOffering extends UnimplementedCard {
  constructor(game) {
    super(game, "Sylvan Offering", "Commander 2014", "C14");
  }
}

module.exports = SylvanOffering;
