"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MindwrackDemonBase = require("../setDDQ/MindwrackDemon.js");

class MindwrackDemon extends MindwrackDemonBase {
  constructor(game) {
    super(game, "Mindwrack Demon", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MindwrackDemon;
