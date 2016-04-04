"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MirrorStrike extends Card {
  constructor(game) {
    super(game, "Mirror Strike", "Prophecy", "PCY");
  }
}

module.exports = MirrorStrike;
