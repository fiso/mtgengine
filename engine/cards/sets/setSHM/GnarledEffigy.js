"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GnarledEffigy extends Card {
  constructor(game) {
    super(game, "Gnarled Effigy", "Shadowmoor", "SHM");
  }
}

module.exports = GnarledEffigy;
