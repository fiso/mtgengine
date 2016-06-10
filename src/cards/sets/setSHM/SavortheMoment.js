"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SavortheMoment extends UnimplementedCard {
  constructor (game) {
    super(game, "Savor the Moment", "Shadowmoor", "SHM");
  }
}

module.exports = SavortheMoment;
