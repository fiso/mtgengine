"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KitesailScout extends UnimplementedCard {
  constructor(game) {
    super(game, "Kitesail Scout", "Battle for Zendikar", "BFZ");
  }
}

module.exports = KitesailScout;
