"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarbarianBully extends UnimplementedCard {
  constructor(game) {
    super(game, "Barbarian Bully", "Judgment", "JUD");
  }
}

module.exports = BarbarianBully;
