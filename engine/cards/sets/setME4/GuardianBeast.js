"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GuardianBeastBase = require("../setARN/GuardianBeast.js");

class GuardianBeast extends GuardianBeastBase {
  constructor(game) {
    super(game, "Guardian Beast", "Masters Edition IV", "ME4");
  }
}

module.exports = GuardianBeast;
