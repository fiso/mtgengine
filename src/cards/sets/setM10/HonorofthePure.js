"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HonorofthePure extends UnimplementedCard {
  constructor(game) {
    super(game, "Honor of the Pure", "Magic 2010", "M10");
  }
}

module.exports = HonorofthePure;
