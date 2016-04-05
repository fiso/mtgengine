"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerrasBlessing extends UnimplementedCard {
  constructor(game) {
    super(game, "Serra's Blessing", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SerrasBlessing;
