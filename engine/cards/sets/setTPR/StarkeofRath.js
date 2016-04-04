"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StarkeofRathBase = require("../setTMP/StarkeofRath.js");

class StarkeofRath extends StarkeofRathBase {
  constructor(game) {
    super(game, "Starke of Rath", "Tempest Remastered", "TPR");
  }
}

module.exports = StarkeofRath;
