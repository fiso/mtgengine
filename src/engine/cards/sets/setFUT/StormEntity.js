"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormEntity extends UnimplementedCard {
  constructor (game) {
    super(game, "Storm Entity", "Future Sight", "FUT");
  }
}

module.exports = StormEntity;
