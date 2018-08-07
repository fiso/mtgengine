"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GangofElk extends UnimplementedCard {
  constructor (game) {
    super(game, "Gang of Elk", "Seventh Edition", "7ED");
  }
}

module.exports = GangofElk;
