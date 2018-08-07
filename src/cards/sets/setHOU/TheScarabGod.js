"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheScarabGod extends UnimplementedCard {
  constructor (game) {
    super(game, "The Scarab God", "Hour of Devastation", "HOU");
  }
}

module.exports = TheScarabGod;
