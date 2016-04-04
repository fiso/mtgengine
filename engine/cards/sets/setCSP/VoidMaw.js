"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoidMaw extends Card {
  constructor(game) {
    super(game, "Void Maw", "Coldsnap", "CSP");
  }
}

module.exports = VoidMaw;
