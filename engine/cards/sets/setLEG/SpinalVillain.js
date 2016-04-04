"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpinalVillain extends Card {
  constructor(game) {
    super(game, "Spinal Villain", "Legends", "LEG");
  }
}

module.exports = SpinalVillain;
