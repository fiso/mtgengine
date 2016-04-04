"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelofSerenityBase = require("../setC15/AngelofSerenity.js");

class AngelofSerenity extends AngelofSerenityBase {
  constructor(game) {
    super(game, "Angel of Serenity", "Return to Ravnica", "RTR");
  }
}

module.exports = AngelofSerenity;
