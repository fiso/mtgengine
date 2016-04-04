"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReclaimBase = require("../setEXO/Reclaim.js");

class Reclaim extends ReclaimBase {
  constructor(game) {
    super(game, "Reclaim", "Magic 2012", "M12");
  }
}

module.exports = Reclaim;
