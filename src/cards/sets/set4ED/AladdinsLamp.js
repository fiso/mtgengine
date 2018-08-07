"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AladdinsLamp extends UnimplementedCard {
  constructor (game) {
    super(game, "Aladdin's Lamp", "Fourth Edition", "4ED");
  }
}

module.exports = AladdinsLamp;
