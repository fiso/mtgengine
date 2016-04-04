"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Telekinesis extends Card {
  constructor(game) {
    super(game, "Telekinesis", "Legends", "LEG");
  }
}

module.exports = Telekinesis;
