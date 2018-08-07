"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrabenFoulbloods extends UnimplementedCard {
  constructor (game) {
    super(game, "Thraben Foulbloods", "Eldritch Moon", "EMN");
  }
}

module.exports = ThrabenFoulbloods;
