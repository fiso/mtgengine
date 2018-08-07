"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeekerofInsight extends UnimplementedCard {
  constructor (game) {
    super(game, "Seeker of Insight", "Amonkhet", "AKH");
  }
}

module.exports = SeekerofInsight;
