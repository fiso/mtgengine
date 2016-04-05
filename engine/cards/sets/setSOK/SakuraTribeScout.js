"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SakuraTribeScout extends UnimplementedCard {
  constructor(game) {
    super(game, "Sakura-Tribe Scout", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SakuraTribeScout;
