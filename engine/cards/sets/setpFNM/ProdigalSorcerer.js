"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ProdigalSorcererBase = require("../setBRB/ProdigalSorcerer.js");

class ProdigalSorcerer extends ProdigalSorcererBase {
  constructor(game) {
    super(game, "Prodigal Sorcerer", "Friday Night Magic", "pFNM");
  }
}

module.exports = ProdigalSorcerer;
