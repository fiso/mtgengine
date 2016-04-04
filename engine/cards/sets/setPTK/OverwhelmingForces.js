"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OverwhelmingForcesBase = require("../setpJGP/OverwhelmingForces.js");

class OverwhelmingForces extends OverwhelmingForcesBase {
  constructor(game) {
    super(game, "Overwhelming Forces", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = OverwhelmingForces;
