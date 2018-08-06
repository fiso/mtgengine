"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrabenStandardBearer extends UnimplementedCard {
  constructor (game) {
    super(game, "Thraben Standard Bearer", "Eldritch Moon", "EMN");
  }
}

module.exports = ThrabenStandardBearer;
