"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DedicatedMartyr extends Card {
  constructor(game) {
    super(game, "Dedicated Martyr", "Odyssey", "ODY");
  }
}

module.exports = DedicatedMartyr;
