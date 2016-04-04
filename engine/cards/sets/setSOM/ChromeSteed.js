"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChromeSteed extends Card {
  constructor(game) {
    super(game, "Chrome Steed", "Scars of Mirrodin", "SOM");
  }
}

module.exports = ChromeSteed;
