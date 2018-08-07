"use strict";
const Constants = require ("../../../Constants");
const OsaiVulturesBase = require("../setME4/OsaiVultures");

class OsaiVultures extends OsaiVulturesBase {
  constructor (game) {
    super(game, "Osai Vultures", "Fourth Edition", "4ED");
  }
}

module.exports = OsaiVultures;
