"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CaravanHurda extends Card {
  constructor(game) {
    super(game, "Caravan Hurda", "Zendikar", "ZEN");
  }
}

module.exports = CaravanHurda;
