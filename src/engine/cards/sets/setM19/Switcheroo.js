"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Switcheroo extends UnimplementedCard {
  constructor (game) {
    super(game, "Switcheroo", "Core Set 2019", "M19");
  }
}

module.exports = Switcheroo;
