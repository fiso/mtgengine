"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Righteousness extends UnimplementedCard {
  constructor(game) {
    super(game, "Righteousness", "Collector's Edition", "CED");
  }
}

module.exports = Righteousness;
