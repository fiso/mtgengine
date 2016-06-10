"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThingfromtheDeep extends UnimplementedCard {
  constructor (game) {
    super(game, "Thing from the Deep", "Masters Edition IV", "ME4");
  }
}

module.exports = ThingfromtheDeep;
