"use strict";
const Constants = require ("../../../Constants");
const GlenElendraArchmageBase = require("../setMMA/GlenElendraArchmage");

class GlenElendraArchmage extends GlenElendraArchmageBase {
  constructor (game) {
    super(game, "Glen Elendra Archmage", "Eventide", "EVE");
  }
}

module.exports = GlenElendraArchmage;
