"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Terminus extends UnimplementedCard {
  constructor(game) {
    super(game, "Terminus", "Avacyn Restored", "AVR");
  }
}

module.exports = Terminus;
