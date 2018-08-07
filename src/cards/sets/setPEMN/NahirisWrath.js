"use strict";
const Constants = require ("../../../Constants");
const NahirisWrathBase = require("../setEMN/NahirisWrath");

class NahirisWrath extends NahirisWrathBase {
  constructor (game) {
    super(game, "Nahiri's Wrath", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = NahirisWrath;
