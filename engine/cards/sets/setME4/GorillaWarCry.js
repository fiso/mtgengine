"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GorillaWarCryBase = require("../setALL/GorillaWarCry.js");

class GorillaWarCry extends GorillaWarCryBase {
  constructor(game) {
    super(game, "Gorilla War Cry", "Masters Edition IV", "ME4");
  }
}

module.exports = GorillaWarCry;
