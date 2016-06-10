"use strict";
const Constants = require ("../../../Constants");
const ChandrasOutrageBase = require("../setARC/ChandrasOutrage");

class ChandrasOutrage extends ChandrasOutrageBase {
  constructor (game) {
    super(game, "Chandra's Outrage", "Magic 2012", "M12");
  }
}

module.exports = ChandrasOutrage;
