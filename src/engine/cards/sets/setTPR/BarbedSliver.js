"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarbedSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Barbed Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = BarbedSliver;
