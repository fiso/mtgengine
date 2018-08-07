"use strict";
const Constants = require ("../../../Constants");
const BirdMaidenBase = require("../setME4/BirdMaiden");

class BirdMaiden extends BirdMaidenBase {
  constructor (game) {
    super(game, "Bird Maiden", "Fifth Edition", "5ED");
  }
}

module.exports = BirdMaiden;
