"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DreamsoftheDeadBase = require("../setICE/DreamsoftheDead.js");

class DreamsoftheDead extends DreamsoftheDeadBase {
  constructor(game) {
    super(game, "Dreams of the Dead", "Masters Edition II", "ME2");
  }
}

module.exports = DreamsoftheDead;
