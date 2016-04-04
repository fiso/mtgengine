"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NobleStand extends Card {
  constructor(game) {
    super(game, "Noble Stand", "Nemesis", "NMS");
  }
}

module.exports = NobleStand;
