"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DesertionBase = require("../set6ED/Desertion.js");

class Desertion extends DesertionBase {
  constructor(game) {
    super(game, "Desertion", "Visions", "VIS");
  }
}

module.exports = Desertion;
