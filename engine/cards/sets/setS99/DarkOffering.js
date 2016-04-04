"use strict";
const Constants = require ("../../../Constants");
const DarkOfferingBase = require("../setPO2/DarkOffering");

class DarkOffering extends DarkOfferingBase {
  constructor(game) {
    super(game, "Dark Offering", "Starter 1999", "S99");
  }
}

module.exports = DarkOffering;
