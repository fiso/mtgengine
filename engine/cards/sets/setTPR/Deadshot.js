"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeadshotBase = require("../setTMP/Deadshot.js");

class Deadshot extends DeadshotBase {
  constructor(game) {
    super(game, "Deadshot", "Tempest Remastered", "TPR");
  }
}

module.exports = Deadshot;
