"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnathemancerBase = require("../setARB/Anathemancer.js");

class Anathemancer extends AnathemancerBase {
  constructor(game) {
    super(game, "Anathemancer", "Friday Night Magic", "pFNM");
  }
}

module.exports = Anathemancer;
