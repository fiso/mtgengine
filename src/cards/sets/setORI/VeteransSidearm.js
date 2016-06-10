"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeteransSidearm extends UnimplementedCard {
  constructor (game) {
    super(game, "Veteran's Sidearm", "Magic Origins", "ORI");
  }
}

module.exports = VeteransSidearm;
