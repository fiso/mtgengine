"use strict";
const Constants = require ("../../../Constants");
const OsaiVulturesBase = require("../setME4/OsaiVultures");

class OsaiVultures extends OsaiVulturesBase {
  constructor (game) {
    super(game, "Osai Vultures", "Legends", "LEG");
  }
}

module.exports = OsaiVultures;
