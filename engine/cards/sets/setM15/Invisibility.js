"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InvisibilityBase = require("../setCED/Invisibility.js");

class Invisibility extends InvisibilityBase {
  constructor(game) {
    super(game, "Invisibility", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Invisibility;
