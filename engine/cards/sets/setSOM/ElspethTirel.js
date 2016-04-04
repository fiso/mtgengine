"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElspethTirel extends Card {
  constructor(game) {
    super(game, "Elspeth Tirel", "Scars of Mirrodin", "SOM");
  }
}

module.exports = ElspethTirel;
