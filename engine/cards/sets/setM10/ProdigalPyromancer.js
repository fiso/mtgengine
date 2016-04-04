"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ProdigalPyromancerBase = require("../setDPA/ProdigalPyromancer.js");

class ProdigalPyromancer extends ProdigalPyromancerBase {
  constructor(game) {
    super(game, "Prodigal Pyromancer", "Magic 2010", "M10");
  }
}

module.exports = ProdigalPyromancer;
