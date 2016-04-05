"use strict";
const Constants = require ("../../../Constants");
const GhoulraiserBase = require("../setDDQ/Ghoulraiser");

class Ghoulraiser extends GhoulraiserBase {
  constructor(game) {
    super(game, "Ghoulraiser", "Innistrad", "ISD");
  }
}

module.exports = Ghoulraiser;
