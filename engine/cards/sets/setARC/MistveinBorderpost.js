"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MistveinBorderpostBase = require("../setARB/MistveinBorderpost.js");

class MistveinBorderpost extends MistveinBorderpostBase {
  constructor(game) {
    super(game, "Mistvein Borderpost", "Archenemy", "ARC");
  }
}

module.exports = MistveinBorderpost;
