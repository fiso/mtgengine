"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Web extends UnimplementedCard {
  constructor (game) {
    super(game, "Web", "Collector's Edition", "CED");
  }
}

module.exports = Web;
