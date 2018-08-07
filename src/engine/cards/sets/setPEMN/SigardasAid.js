"use strict";
const Constants = require ("../../../Constants");
const SigardasAidBase = require("../setEMN/SigardasAid");

class SigardasAid extends SigardasAidBase {
  constructor (game) {
    super(game, "Sigarda's Aid", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = SigardasAid;
