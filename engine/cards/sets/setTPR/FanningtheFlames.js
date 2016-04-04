"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FanningtheFlamesBase = require("../setSTH/FanningtheFlames.js");

class FanningtheFlames extends FanningtheFlamesBase {
  constructor(game) {
    super(game, "Fanning the Flames", "Tempest Remastered", "TPR");
  }
}

module.exports = FanningtheFlames;
