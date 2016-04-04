"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DirtyWererat extends Card {
  constructor(game) {
    super(game, "Dirty Wererat", "Odyssey", "ODY");
  }
}

module.exports = DirtyWererat;
