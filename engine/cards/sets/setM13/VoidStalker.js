"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoidStalker extends Card {
  constructor(game) {
    super(game, "Void Stalker", "Magic 2013", "M13");
  }
}

module.exports = VoidStalker;
