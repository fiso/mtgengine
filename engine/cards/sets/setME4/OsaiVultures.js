"use strict";
const Constants = require ("../../../Constants");
const OsaiVulturesBase = require("../set4ED/OsaiVultures");

class OsaiVultures extends OsaiVulturesBase {
  constructor(game) {
    super(game, "Osai Vultures", "Masters Edition IV", "ME4");
  }
}

module.exports = OsaiVultures;
