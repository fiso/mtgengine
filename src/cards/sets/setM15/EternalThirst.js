"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EternalThirst extends UnimplementedCard {
  constructor (game) {
    super(game, "Eternal Thirst", "Magic 2015 Core Set", "M15");
  }
}

module.exports = EternalThirst;
