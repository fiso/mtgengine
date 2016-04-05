"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MeletisCharlatan extends UnimplementedCard {
  constructor(game) {
    super(game, "Meletis Charlatan", "Theros", "THS");
  }
}

module.exports = MeletisCharlatan;
