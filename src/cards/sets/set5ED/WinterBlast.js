"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WinterBlast extends UnimplementedCard {
  constructor (game) {
    super(game, "Winter Blast", "Fifth Edition", "5ED");
  }
}

module.exports = WinterBlast;
