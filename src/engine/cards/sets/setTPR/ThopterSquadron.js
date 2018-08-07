"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThopterSquadron extends UnimplementedCard {
  constructor (game) {
    super(game, "Thopter Squadron", "Tempest Remastered", "TPR");
  }
}

module.exports = ThopterSquadron;
