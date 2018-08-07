"use strict";
const Constants = require ("../../../Constants");
const ObeliskofGrixisBase = require("../setE01/ObeliskofGrixis");

class ObeliskofGrixis extends ObeliskofGrixisBase {
  constructor (game) {
    super(game, "Obelisk of Grixis", "Shards of Alara", "ALA");
  }
}

module.exports = ObeliskofGrixis;
