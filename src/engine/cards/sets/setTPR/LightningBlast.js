"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningBlast extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Blast", "Tempest Remastered", "TPR");
  }
}

module.exports = LightningBlast;
