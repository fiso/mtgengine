"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DruidLyrist extends Card {
  constructor(game) {
    super(game, "Druid Lyrist", "Odyssey", "ODY");
  }
}

module.exports = DruidLyrist;
