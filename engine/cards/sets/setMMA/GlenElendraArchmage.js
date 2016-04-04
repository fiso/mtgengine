"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GlenElendraArchmageBase = require("../setEVE/GlenElendraArchmage.js");

class GlenElendraArchmage extends GlenElendraArchmageBase {
  constructor(game) {
    super(game, "Glen Elendra Archmage", "Modern Masters", "MMA");
  }
}

module.exports = GlenElendraArchmage;
