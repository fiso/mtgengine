"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Timetwister extends UnimplementedCard {
  constructor (game) {
    super(game, "Timetwister", "Collector's Edition", "CED");
  }
}

module.exports = Timetwister;
