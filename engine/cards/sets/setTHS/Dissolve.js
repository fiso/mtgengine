"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DissolveBase = require("../setpFNM/Dissolve.js");

class Dissolve extends DissolveBase {
  constructor(game) {
    super(game, "Dissolve", "Theros", "THS");
  }
}

module.exports = Dissolve;
