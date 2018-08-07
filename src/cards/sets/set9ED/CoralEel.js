"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoralEel extends UnimplementedCard {
  constructor (game) {
    super(game, "Coral Eel", "Ninth Edition", "9ED");
  }
}

module.exports = CoralEel;
