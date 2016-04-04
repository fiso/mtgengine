"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DesertionBase = require("../set6ED/Desertion.js");

class Desertion extends DesertionBase {
  constructor(game) {
    super(game, "Desertion", "Commander's Arsenal", "CM1");
  }
}

module.exports = Desertion;
