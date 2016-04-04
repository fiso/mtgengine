"use strict";
const Constants = require ("../../../Constants");
const BirdMaidenBase = require("../setARN/BirdMaiden");

class BirdMaiden extends BirdMaidenBase {
  constructor(game) {
    super(game, "Bird Maiden", "Masters Edition IV", "ME4");
  }
}

module.exports = BirdMaiden;
