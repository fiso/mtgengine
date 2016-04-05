"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MonkRealist extends UnimplementedCard {
  constructor(game) {
    super(game, "Monk Realist", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = MonkRealist;
