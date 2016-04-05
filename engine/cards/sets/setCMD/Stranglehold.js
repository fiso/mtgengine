"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stranglehold extends UnimplementedCard {
  constructor(game) {
    super(game, "Stranglehold", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Stranglehold;
