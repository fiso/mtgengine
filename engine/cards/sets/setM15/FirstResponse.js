"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FirstResponse extends Card {
  constructor(game) {
    super(game, "First Response", "Magic 2015 Core Set", "M15");
  }
}

module.exports = FirstResponse;
