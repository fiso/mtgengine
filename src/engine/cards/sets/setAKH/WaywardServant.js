"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaywardServant extends UnimplementedCard {
  constructor (game) {
    super(game, "Wayward Servant", "Amonkhet", "AKH");
  }
}

module.exports = WaywardServant;
