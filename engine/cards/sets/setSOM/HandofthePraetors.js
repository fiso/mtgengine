"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HandofthePraetors extends Card {
  constructor(game) {
    super(game, "Hand of the Praetors", "Scars of Mirrodin", "SOM");
  }
}

module.exports = HandofthePraetors;
