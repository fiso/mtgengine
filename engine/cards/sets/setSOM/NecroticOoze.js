"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NecroticOoze extends Card {
  constructor(game) {
    super(game, "Necrotic Ooze", "Scars of Mirrodin", "SOM");
  }
}

module.exports = NecroticOoze;
