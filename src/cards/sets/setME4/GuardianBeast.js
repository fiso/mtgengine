"use strict";
const Constants = require ("../../../Constants");
const GuardianBeastBase = require("../setARN/GuardianBeast");

class GuardianBeast extends GuardianBeastBase {
  constructor(game) {
    super(game, "Guardian Beast", "Masters Edition IV", "ME4");
  }
}

module.exports = GuardianBeast;
