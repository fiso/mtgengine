"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Elemental", "Magic 2012", "M12");
  }
}

module.exports = LightningElemental;
