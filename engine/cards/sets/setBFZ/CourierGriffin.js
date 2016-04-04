"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CourierGriffin extends Card {
  constructor(game) {
    super(game, "Courier Griffin", "Battle for Zendikar", "BFZ");
  }
}

module.exports = CourierGriffin;
