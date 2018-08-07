"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheLocustGod extends UnimplementedCard {
  constructor (game) {
    super(game, "The Locust God", "Hour of Devastation", "HOU");
  }
}

module.exports = TheLocustGod;
