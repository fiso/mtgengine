"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VeteransSidearm extends Card {
  constructor(game) {
    super(game, "Veteran's Sidearm", "Magic Origins", "ORI");
  }
}

module.exports = VeteransSidearm;
