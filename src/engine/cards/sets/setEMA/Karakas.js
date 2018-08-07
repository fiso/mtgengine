"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Karakas extends UnimplementedCard {
  constructor (game) {
    super(game, "Karakas", "Eternal Masters", "EMA");
  }
}

module.exports = Karakas;
