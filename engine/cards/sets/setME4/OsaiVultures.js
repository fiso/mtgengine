"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OsaiVulturesBase = require("../set4ED/OsaiVultures.js");

class OsaiVultures extends OsaiVulturesBase {
  constructor(game) {
    super(game, "Osai Vultures", "Masters Edition IV", "ME4");
  }
}

module.exports = OsaiVultures;
