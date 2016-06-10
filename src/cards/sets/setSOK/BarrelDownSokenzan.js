"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarrelDownSokenzan extends UnimplementedCard {
  constructor (game) {
    super(game, "Barrel Down Sokenzan", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = BarrelDownSokenzan;
