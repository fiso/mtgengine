"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Omnibian extends Card {
  constructor(game) {
    super(game, "Omnibian", "Dissension", "DIS");
  }
}

module.exports = Omnibian;
