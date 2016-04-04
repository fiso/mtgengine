"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkeletalChangeling extends Card {
  constructor(game) {
    super(game, "Skeletal Changeling", "Lorwyn", "LRW");
  }
}

module.exports = SkeletalChangeling;
