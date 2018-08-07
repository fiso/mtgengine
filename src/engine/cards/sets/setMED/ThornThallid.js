"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThornThallid extends UnimplementedCard {
  constructor (game) {
    super(game, "Thorn Thallid", "Masters Edition", "MED");
  }
}

module.exports = ThornThallid;
