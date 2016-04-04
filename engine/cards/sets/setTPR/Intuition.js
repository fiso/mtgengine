"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IntuitionBase = require("../setpJGP/Intuition.js");

class Intuition extends IntuitionBase {
  constructor(game) {
    super(game, "Intuition", "Tempest Remastered", "TPR");
  }
}

module.exports = Intuition;
