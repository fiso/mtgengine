"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WrapinVigor extends UnimplementedCard {
  constructor(game) {
    super(game, "Wrap in Vigor", "Future Sight", "FUT");
  }
}

module.exports = WrapinVigor;
