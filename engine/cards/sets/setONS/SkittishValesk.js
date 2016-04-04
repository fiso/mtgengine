"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkittishValesk extends UnimplementedCard {
  constructor(game) {
    super(game, "Skittish Valesk", "Onslaught", "ONS");
  }
}

module.exports = SkittishValesk;
