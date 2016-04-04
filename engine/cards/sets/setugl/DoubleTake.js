"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DoubleTake extends Card {
  constructor(game) {
    super(game, "Double Take", "Unglued", "UGL");
  }
}

module.exports = DoubleTake;
