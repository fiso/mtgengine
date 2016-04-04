"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindUnbound extends Card {
  constructor(game) {
    super(game, "Mind Unbound", "Magic 2012", "M12");
  }
}

module.exports = MindUnbound;
