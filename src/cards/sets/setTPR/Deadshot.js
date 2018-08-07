"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Deadshot extends UnimplementedCard {
  constructor (game) {
    super(game, "Deadshot", "Tempest Remastered", "TPR");
  }
}

module.exports = Deadshot;
