"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FirstResponse extends UnimplementedCard {
  constructor (game) {
    super(game, "First Response", "Magic 2015 Core Set", "M15");
  }
}

module.exports = FirstResponse;
