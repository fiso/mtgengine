"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagesContest extends UnimplementedCard {
  constructor (game) {
    super(game, "Mages' Contest", "Invasion", "INV");
  }
}

module.exports = MagesContest;
