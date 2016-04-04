"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EmmessiTomeBase = require("../setTMP/EmmessiTome.js");

class EmmessiTome extends EmmessiTomeBase {
  constructor(game) {
    super(game, "Emmessi Tome", "Tempest Remastered", "TPR");
  }
}

module.exports = EmmessiTome;
