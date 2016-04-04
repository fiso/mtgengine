"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GhoulraiserBase = require("../setDDQ/Ghoulraiser.js");

class Ghoulraiser extends GhoulraiserBase {
  constructor(game) {
    super(game, "Ghoulraiser", "Innistrad", "ISD");
  }
}

module.exports = Ghoulraiser;
