"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlazeofGlory extends UnimplementedCard {
  constructor(game) {
    super(game, "Blaze of Glory", "Collector's Edition", "CED");
  }
}

module.exports = BlazeofGlory;
