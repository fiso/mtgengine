"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BoosterTutorBase = require("../setpARL/BoosterTutor.js");

class BoosterTutor extends BoosterTutorBase {
  constructor(game) {
    super(game, "Booster Tutor", "Unhinged", "UNH");
  }
}

module.exports = BoosterTutor;
