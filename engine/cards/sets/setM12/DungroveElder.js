"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DungroveElder extends Card {
  constructor(game) {
    super(game, "Dungrove Elder", "Magic 2012", "M12");
  }
}

module.exports = DungroveElder;
