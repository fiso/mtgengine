"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoggHollows extends UnimplementedCard {
  constructor (game) {
    super(game, "Mogg Hollows", "Tempest Remastered", "TPR");
  }
}

module.exports = MoggHollows;
