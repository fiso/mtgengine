"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SandSilosBase = require("../setFEM/SandSilos.js");

class SandSilos extends SandSilosBase {
  constructor(game) {
    super(game, "Sand Silos", "Fifth Edition", "5ED");
  }
}

module.exports = SandSilos;
