"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CannibalizeBase = require("../setSTH/Cannibalize.js");

class Cannibalize extends CannibalizeBase {
  constructor(game) {
    super(game, "Cannibalize", "Tempest Remastered", "TPR");
  }
}

module.exports = Cannibalize;
