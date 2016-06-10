"use strict";
const Constants = require ("../../../Constants");
const ChandrasPhoenixBase = require("../setM12/ChandrasPhoenix");

class ChandrasPhoenix extends ChandrasPhoenixBase {
  constructor (game) {
    super(game, "Chandra's Phoenix", "Magic 2014 Core Set", "M14");
  }
}

module.exports = ChandrasPhoenix;
