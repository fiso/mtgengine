"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MirrodinsCore extends Card {
  constructor(game) {
    super(game, "Mirrodin's Core", "Darksteel", "DST");
  }
}

module.exports = MirrodinsCore;
