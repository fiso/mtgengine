"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Icefall extends Card {
  constructor(game) {
    super(game, "Icefall", "Coldsnap", "CSP");
  }
}

module.exports = Icefall;
