"use strict";
const Constants = require ("../../../Constants");
const DarkOfferingBase = require("../setS99/DarkOffering");

class DarkOffering extends DarkOfferingBase {
  constructor (game) {
    super(game, "Dark Offering", "Portal Second Age", "P02");
  }
}

module.exports = DarkOffering;
