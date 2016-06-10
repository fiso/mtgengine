"use strict";
const Constants = require ("../../../Constants");
const MistveinBorderpostBase = require("../setARB/MistveinBorderpost");

class MistveinBorderpost extends MistveinBorderpostBase {
  constructor (game) {
    super(game, "Mistvein Borderpost", "Archenemy", "ARC");
  }
}

module.exports = MistveinBorderpost;
