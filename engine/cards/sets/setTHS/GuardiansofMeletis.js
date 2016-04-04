"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GuardiansofMeletisBase = require("../setORI/GuardiansofMeletis.js");

class GuardiansofMeletis extends GuardiansofMeletisBase {
  constructor(game) {
    super(game, "Guardians of Meletis", "Theros", "THS");
  }
}

module.exports = GuardiansofMeletis;
