"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stampede extends UnimplementedCard {
  constructor (game) {
    super(game, "Stampede", "Fifth Edition", "5ED");
  }
}

module.exports = Stampede;
