"use strict";
const Constants = require ("../../../Constants");
const OsaiVulturesBase = require("../set4ED/OsaiVultures");

class OsaiVultures extends OsaiVulturesBase {
  constructor (game) {
    super(game, "Osai Vultures", "Legends", "LEG");
  }
}

module.exports = OsaiVultures;
