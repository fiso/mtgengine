"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GladecoverScout extends UnimplementedCard {
  constructor(game) {
    super(game, "Gladecover Scout", "Magic 2012", "M12");
  }
}

module.exports = GladecoverScout;
