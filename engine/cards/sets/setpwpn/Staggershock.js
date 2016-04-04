"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StaggershockBase = require("../setROE/Staggershock.js");

class Staggershock extends StaggershockBase {
  constructor(game) {
    super(game, "Staggershock", "WPN and Gateway", "pWPN");
  }
}

module.exports = Staggershock;
