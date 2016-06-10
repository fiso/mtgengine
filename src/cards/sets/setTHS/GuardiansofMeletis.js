"use strict";
const Constants = require ("../../../Constants");
const GuardiansofMeletisBase = require("../setORI/GuardiansofMeletis");

class GuardiansofMeletis extends GuardiansofMeletisBase {
  constructor (game) {
    super(game, "Guardians of Meletis", "Theros", "THS");
  }
}

module.exports = GuardiansofMeletis;
