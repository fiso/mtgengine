"use strict";
const Constants = require ("../../../Constants");
const PaintersServantBase = require("../setMPS/PaintersServant");

class PaintersServant extends PaintersServantBase {
  constructor (game) {
    super(game, "Painter's Servant", "Shadowmoor", "SHM");
  }
}

module.exports = PaintersServant;
