"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NorintheWary extends Card {
  constructor(game) {
    super(game, "Norin the Wary", "Time Spiral", "TSP");
  }
}

module.exports = NorintheWary;
