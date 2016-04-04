"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Preacher extends UnimplementedCard {
  constructor(game) {
    super(game, "Preacher", "Masters Edition", "MED");
  }
}

module.exports = Preacher;
