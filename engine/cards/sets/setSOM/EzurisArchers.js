"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EzurisArchers extends Card {
  constructor(game) {
    super(game, "Ezuri's Archers", "Scars of Mirrodin", "SOM");
  }
}

module.exports = EzurisArchers;
