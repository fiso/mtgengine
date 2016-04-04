"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DesperateRitualBase = require("../setCHK/DesperateRitual.js");

class DesperateRitual extends DesperateRitualBase {
  constructor(game) {
    super(game, "Desperate Ritual", "Modern Masters", "MMA");
  }
}

module.exports = DesperateRitual;
