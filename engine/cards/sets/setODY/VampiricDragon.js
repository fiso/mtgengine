"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VampiricDragonBase = require("../setARC/VampiricDragon.js");

class VampiricDragon extends VampiricDragonBase {
  constructor(game) {
    super(game, "Vampiric Dragon", "Odyssey", "ODY");
  }
}

module.exports = VampiricDragon;
