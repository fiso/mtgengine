"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BorosSignetBase = require("../setC15/BorosSignet.js");

class BorosSignet extends BorosSignetBase {
  constructor(game) {
    super(game, "Boros Signet", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = BorosSignet;
