"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdamantWill extends UnimplementedCard {
  constructor (game) {
    super(game, "Adamant Will", "Dominaria", "DOM");
  }
}

module.exports = AdamantWill;
