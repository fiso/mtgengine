"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gravedigger extends UnimplementedCard {
  constructor (game) {
    super(game, "Gravedigger", "Beatdown Box Set", "BTD");
  }
}

module.exports = Gravedigger;
