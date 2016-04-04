"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EternalThirst extends Card {
  constructor(game) {
    super(game, "Eternal Thirst", "Magic 2015 Core Set", "M15");
  }
}

module.exports = EternalThirst;
