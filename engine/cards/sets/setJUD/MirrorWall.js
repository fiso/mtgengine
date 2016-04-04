"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MirrorWall extends Card {
  constructor(game) {
    super(game, "Mirror Wall", "Judgment", "JUD");
  }
}

module.exports = MirrorWall;
