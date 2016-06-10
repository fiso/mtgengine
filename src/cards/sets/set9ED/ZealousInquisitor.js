"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZealousInquisitor extends UnimplementedCard {
  constructor (game) {
    super(game, "Zealous Inquisitor", "Ninth Edition", "9ED");
  }
}

module.exports = ZealousInquisitor;
