"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningBlast extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Blast", "Classic Sixth Edition", "6ED");
  }
}

module.exports = LightningBlast;
