"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EzurisBrigade extends Card {
  constructor(game) {
    super(game, "Ezuri's Brigade", "Scars of Mirrodin", "SOM");
  }
}

module.exports = EzurisBrigade;
