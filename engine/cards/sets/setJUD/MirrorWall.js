"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirrorWall extends UnimplementedCard {
  constructor(game) {
    super(game, "Mirror Wall", "Judgment", "JUD");
  }
}

module.exports = MirrorWall;
