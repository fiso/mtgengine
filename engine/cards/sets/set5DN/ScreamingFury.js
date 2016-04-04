"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScreamingFury extends Card {
  constructor(game) {
    super(game, "Screaming Fury", "Fifth Dawn", "5DN");
  }
}

module.exports = ScreamingFury;
