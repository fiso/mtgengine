"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EternalThirst extends UnimplementedCard {
  constructor (game) {
    super(game, "Eternal Thirst", "Iconic Masters", "IMA");
  }
}

module.exports = EternalThirst;
