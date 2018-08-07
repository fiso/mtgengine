"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WingedSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Winged Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = WingedSliver;
