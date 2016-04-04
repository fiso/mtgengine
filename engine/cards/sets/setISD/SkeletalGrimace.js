"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkeletalGrimace extends Card {
  constructor(game) {
    super(game, "Skeletal Grimace", "Innistrad", "ISD");
  }
}

module.exports = SkeletalGrimace;
