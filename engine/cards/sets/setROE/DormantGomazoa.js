"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DormantGomazoa extends Card {
  constructor(game) {
    super(game, "Dormant Gomazoa", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = DormantGomazoa;
