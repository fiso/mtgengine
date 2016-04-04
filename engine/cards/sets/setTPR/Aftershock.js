"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AftershockBase = require("../setTMP/Aftershock.js");

class Aftershock extends AftershockBase {
  constructor(game) {
    super(game, "Aftershock", "Tempest Remastered", "TPR");
  }
}

module.exports = Aftershock;
