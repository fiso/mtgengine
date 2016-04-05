"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KuonsEssence extends UnimplementedCard {
  constructor(game) {
    super(game, "Kuon's Essence", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = KuonsEssence;
