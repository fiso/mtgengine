"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Foxfire extends UnimplementedCard {
  constructor (game) {
    super(game, "Foxfire", "Fifth Edition", "5ED");
  }
}

module.exports = Foxfire;
