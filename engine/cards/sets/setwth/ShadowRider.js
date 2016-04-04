"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShadowRider extends Card {
  constructor(game) {
    super(game, "Shadow Rider", "Weatherlight", "WTH");
  }
}

module.exports = ShadowRider;
