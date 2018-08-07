"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WretchedCamel extends UnimplementedCard {
  constructor (game) {
    super(game, "Wretched Camel", "Hour of Devastation", "HOU");
  }
}

module.exports = WretchedCamel;
