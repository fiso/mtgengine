"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkullcageBase = require("../setARC/Skullcage.js");

class Skullcage extends SkullcageBase {
  constructor(game) {
    super(game, "Skullcage", "Fifth Dawn", "5DN");
  }
}

module.exports = Skullcage;
