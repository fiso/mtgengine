"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Deathmark extends Card {
  constructor(game) {
    super(game, "Deathmark", "Coldsnap", "CSP");
  }
}

module.exports = Deathmark;
