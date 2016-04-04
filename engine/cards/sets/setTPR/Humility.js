"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HumilityBase = require("../setTMP/Humility.js");

class Humility extends HumilityBase {
  constructor(game) {
    super(game, "Humility", "Tempest Remastered", "TPR");
  }
}

module.exports = Humility;
