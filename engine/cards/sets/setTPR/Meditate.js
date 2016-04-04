"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MeditateBase = require("../setTMP/Meditate.js");

class Meditate extends MeditateBase {
  constructor(game) {
    super(game, "Meditate", "Tempest Remastered", "TPR");
  }
}

module.exports = Meditate;
