"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Switcheroo extends UnimplementedCard {
  constructor(game) {
    super(game, "Switcheroo", "Magic 2013", "M13");
  }
}

module.exports = Switcheroo;
