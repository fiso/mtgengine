"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulofTheros extends Card {
  constructor(game) {
    super(game, "Soul of Theros", "Magic 2015 Core Set", "M15");
  }
}

module.exports = SoulofTheros;
