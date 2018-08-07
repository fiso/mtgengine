"use strict";
const Constants = require ("../../../Constants");
const MistveinBorderpostBase = require("../setARC/MistveinBorderpost");

class MistveinBorderpost extends MistveinBorderpostBase {
  constructor (game) {
    super(game, "Mistvein Borderpost", "Alara Reborn", "ARB");
  }
}

module.exports = MistveinBorderpost;
