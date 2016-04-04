"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShyftBase = require("../setICE/Shyft.js");

class Shyft extends ShyftBase {
  constructor(game) {
    super(game, "Shyft", "Masters Edition II", "ME2");
  }
}

module.exports = Shyft;
