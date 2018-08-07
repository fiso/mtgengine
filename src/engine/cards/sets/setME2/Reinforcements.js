"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reinforcements extends UnimplementedCard {
  constructor (game) {
    super(game, "Reinforcements", "Masters Edition II", "ME2");
  }
}

module.exports = Reinforcements;
