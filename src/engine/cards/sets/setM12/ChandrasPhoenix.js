"use strict";
const Constants = require ("../../../Constants");
const ChandrasPhoenixBase = require("../setE01/ChandrasPhoenix");

class ChandrasPhoenix extends ChandrasPhoenixBase {
  constructor (game) {
    super(game, "Chandra's Phoenix", "Magic 2012", "M12");
  }
}

module.exports = ChandrasPhoenix;
