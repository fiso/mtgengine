"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MasterThief extends Card {
  constructor(game) {
    super(game, "Master Thief", "Magic 2012", "M12");
  }
}

module.exports = MasterThief;
