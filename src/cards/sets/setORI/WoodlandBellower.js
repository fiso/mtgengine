"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodlandBellower extends UnimplementedCard {
  constructor(game) {
    super(game, "Woodland Bellower", "Magic Origins", "ORI");
  }
}

module.exports = WoodlandBellower;
