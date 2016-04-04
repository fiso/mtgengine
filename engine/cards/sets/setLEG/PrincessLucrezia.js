"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrincessLucrezia extends Card {
  constructor(game) {
    super(game, "Princess Lucrezia", "Legends", "LEG");
  }
}

module.exports = PrincessLucrezia;
