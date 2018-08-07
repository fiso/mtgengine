"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Enfeeblement extends UnimplementedCard {
  constructor (game) {
    super(game, "Enfeeblement", "Ninth Edition", "9ED");
  }
}

module.exports = Enfeeblement;
