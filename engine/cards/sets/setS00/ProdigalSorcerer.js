"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ProdigalSorcererBase = require("../setBRB/ProdigalSorcerer.js");

class ProdigalSorcerer extends ProdigalSorcererBase {
  constructor(game) {
    super(game, "Prodigal Sorcerer", "Starter 2000", "S00");
  }
}

module.exports = ProdigalSorcerer;
