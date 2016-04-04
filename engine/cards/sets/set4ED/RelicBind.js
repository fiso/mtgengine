"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RelicBind extends UnimplementedCard {
  constructor(game) {
    super(game, "Relic Bind", "Fourth Edition", "4ED");
  }
}

module.exports = RelicBind;
