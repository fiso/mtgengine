"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CommonCourtesy extends UnimplementedCard {
  constructor (game) {
    super(game, "Common Courtesy", "Unglued", "UGL");
  }
}

module.exports = CommonCourtesy;
