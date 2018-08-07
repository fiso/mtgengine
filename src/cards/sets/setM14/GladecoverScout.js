"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GladecoverScout extends UnimplementedCard {
  constructor (game) {
    super(game, "Gladecover Scout", "Magic 2014", "M14");
  }
}

module.exports = GladecoverScout;
