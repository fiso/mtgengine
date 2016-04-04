"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AugurofSkulls extends Card {
  constructor(game) {
    super(game, "Augur of Skulls", "Future Sight", "FUT");
  }
}

module.exports = AugurofSkulls;
