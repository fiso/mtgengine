"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GolgariThugBase = require("../setDDJ/GolgariThug.js");

class GolgariThug extends GolgariThugBase {
  constructor(game) {
    super(game, "Golgari Thug", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GolgariThug;
