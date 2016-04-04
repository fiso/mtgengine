"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UrDrago extends Card {
  constructor(game) {
    super(game, "Ur-Drago", "Legends", "LEG");
  }
}

module.exports = UrDrago;
