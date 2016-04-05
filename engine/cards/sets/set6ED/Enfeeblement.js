"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Enfeeblement extends UnimplementedCard {
  constructor(game) {
    super(game, "Enfeeblement", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Enfeeblement;
