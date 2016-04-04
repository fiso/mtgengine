"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightofDay extends Card {
  constructor(game) {
    super(game, "Light of Day", "Classic Sixth Edition", "6ED");
  }
}

module.exports = LightofDay;
