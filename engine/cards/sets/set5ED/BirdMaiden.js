"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BirdMaidenBase = require("../setARN/BirdMaiden.js");

class BirdMaiden extends BirdMaidenBase {
  constructor(game) {
    super(game, "Bird Maiden", "Fifth Edition", "5ED");
  }
}

module.exports = BirdMaiden;
