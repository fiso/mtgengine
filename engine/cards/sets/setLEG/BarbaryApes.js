"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarbaryApes extends Card {
  constructor(game) {
    super(game, "Barbary Apes", "Legends", "LEG");
  }
}

module.exports = BarbaryApes;
