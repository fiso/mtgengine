"use strict";
const Constants = require ("../../../Constants");
const CityofTraitorsBase = require("../setEXO/CityofTraitors");

class CityofTraitors extends CityofTraitorsBase {
  constructor(game) {
    super(game, "City of Traitors", "Tempest Remastered", "TPR");
  }
}

module.exports = CityofTraitors;
