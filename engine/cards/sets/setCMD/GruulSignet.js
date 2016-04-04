"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GruulSignetBase = require("../setARC/GruulSignet.js");

class GruulSignet extends GruulSignetBase {
  constructor(game) {
    super(game, "Gruul Signet", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = GruulSignet;
