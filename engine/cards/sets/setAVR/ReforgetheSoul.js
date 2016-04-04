"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReforgetheSoul extends UnimplementedCard {
  constructor(game) {
    super(game, "Reforge the Soul", "Avacyn Restored", "AVR");
  }
}

module.exports = ReforgetheSoul;
