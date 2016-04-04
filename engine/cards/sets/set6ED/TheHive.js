"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TheHive extends Card {
  constructor(game) {
    super(game, "The Hive", "Classic Sixth Edition", "6ED");
  }
}

module.exports = TheHive;
