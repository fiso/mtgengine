"use strict";
const Constants = require ("../../../Constants");
const MirentheMoaningWellBase = require("../setTD0/MirentheMoaningWell");

class MirentheMoaningWell extends MirentheMoaningWellBase {
  constructor (game) {
    super(game, "Miren, the Moaning Well", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = MirentheMoaningWell;
