"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlameKinZealotBase = require("../setDDN/FlameKinZealot.js");

class FlameKinZealot extends FlameKinZealotBase {
  constructor(game) {
    super(game, "Flame-Kin Zealot", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = FlameKinZealot;
