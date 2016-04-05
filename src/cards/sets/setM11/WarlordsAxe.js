"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarlordsAxe extends UnimplementedCard {
  constructor(game) {
    super(game, "Warlord's Axe", "Magic 2011", "M11");
  }
}

module.exports = WarlordsAxe;
