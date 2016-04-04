"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TeysaEnvoyofGhostsBase = require("../setC15/TeysaEnvoyofGhosts.js");

class TeysaEnvoyofGhosts extends TeysaEnvoyofGhostsBase {
  constructor(game) {
    super(game, "Teysa, Envoy of Ghosts", "Dragon's Maze", "DGM");
  }
}

module.exports = TeysaEnvoyofGhosts;
