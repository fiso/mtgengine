"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LadySun extends Card {
  constructor(game) {
    super(game, "Lady Sun", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = LadySun;
