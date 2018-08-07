"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuddleUp extends UnimplementedCard {
  constructor (game) {
    super(game, "Huddle Up", "Battlebond", "BBD");
  }
}

module.exports = HuddleUp;
