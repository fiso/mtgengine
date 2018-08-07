"use strict";
const Constants = require ("../../../Constants");
const SpiteMaliceBase = require("../setDDH/SpiteMalice");

class SpiteMalice extends SpiteMaliceBase {
  constructor (game) {
    super(game, "Spite // Malice", "Invasion", "INV");
  }
}

module.exports = SpiteMalice;
