"use strict";
const Constants = require ("../../../Constants");
const AnathemancerBase = require("../setARB/Anathemancer");

class Anathemancer extends AnathemancerBase {
  constructor(game) {
    super(game, "Anathemancer", "Friday Night Magic", "pFNM");
  }
}

module.exports = Anathemancer;
