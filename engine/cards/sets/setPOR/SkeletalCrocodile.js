"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkeletalCrocodile extends Card {
  constructor(game) {
    super(game, "Skeletal Crocodile", "Portal", "POR");
  }
}

module.exports = SkeletalCrocodile;
