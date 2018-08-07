"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GangUp extends UnimplementedCard {
  constructor (game) {
    super(game, "Gang Up", "Battlebond", "BBD");
  }
}

module.exports = GangUp;
