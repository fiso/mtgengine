"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CityofTraitorsBase = require("../setEXO/CityofTraitors.js");

class CityofTraitors extends CityofTraitorsBase {
  constructor(game) {
    super(game, "City of Traitors", "Tempest Remastered", "TPR");
  }
}

module.exports = CityofTraitors;
