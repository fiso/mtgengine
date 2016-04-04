"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WalktheAeons extends Card {
  constructor(game) {
    super(game, "Walk the Aeons", "Time Spiral", "TSP");
  }
}

module.exports = WalktheAeons;
