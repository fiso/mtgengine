"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofBone extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Bone", "Collector's Edition", "CED");
  }
}

module.exports = WallofBone;
