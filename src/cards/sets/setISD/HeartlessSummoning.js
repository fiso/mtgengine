"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeartlessSummoning extends UnimplementedCard {
  constructor (game) {
    super(game, "Heartless Summoning", "Innistrad", "ISD");
  }
}

module.exports = HeartlessSummoning;
