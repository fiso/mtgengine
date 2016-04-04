"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Drelnoch extends Card {
  constructor(game) {
    super(game, "Drelnoch", "Coldsnap", "CSP");
  }
}

module.exports = Drelnoch;
