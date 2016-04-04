"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkeletalCrocodile extends UnimplementedCard {
  constructor(game) {
    super(game, "Skeletal Crocodile", "Portal", "POR");
  }
}

module.exports = SkeletalCrocodile;
