"use strict";
const Constants = require ("../../../Constants");
const GlenElendraArchmageBase = require("../setEVE/GlenElendraArchmage");

class GlenElendraArchmage extends GlenElendraArchmageBase {
  constructor (game) {
    super(game, "Glen Elendra Archmage", "Modern Masters", "MMA");
  }
}

module.exports = GlenElendraArchmage;
