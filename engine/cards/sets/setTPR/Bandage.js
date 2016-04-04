"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BandageBase = require("../setSTH/Bandage.js");

class Bandage extends BandageBase {
  constructor(game) {
    super(game, "Bandage", "Tempest Remastered", "TPR");
  }
}

module.exports = Bandage;
