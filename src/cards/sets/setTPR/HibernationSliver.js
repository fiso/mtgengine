"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HibernationSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Hibernation Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = HibernationSliver;
