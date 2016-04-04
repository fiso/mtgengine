"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlickeringWard extends Card {
  constructor(game) {
    super(game, "Flickering Ward", "Tempest", "TMP");
  }
}

module.exports = FlickeringWard;
