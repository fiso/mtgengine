"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcBlade extends UnimplementedCard {
  constructor (game) {
    super(game, "Arc Blade", "Future Sight", "FUT");
  }
}

module.exports = ArcBlade;
