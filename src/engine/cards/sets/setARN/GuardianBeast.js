"use strict";
const Constants = require ("../../../Constants");
const GuardianBeastBase = require("../setME4/GuardianBeast");

class GuardianBeast extends GuardianBeastBase {
  constructor (game) {
    super(game, "Guardian Beast", "Arabian Nights", "ARN");
  }
}

module.exports = GuardianBeast;
