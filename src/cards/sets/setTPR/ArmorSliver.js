"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmorSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Armor Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = ArmorSliver;
