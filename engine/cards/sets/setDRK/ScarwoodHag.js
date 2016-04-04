"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScarwoodHag extends Card {
  constructor(game) {
    super(game, "Scarwood Hag", "The Dark", "DRK");
  }
}

module.exports = ScarwoodHag;
