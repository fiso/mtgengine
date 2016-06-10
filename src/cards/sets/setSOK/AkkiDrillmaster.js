"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AkkiDrillmaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Akki Drillmaster", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = AkkiDrillmaster;
