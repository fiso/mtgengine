"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChildofThorns extends UnimplementedCard {
  constructor (game) {
    super(game, "Child of Thorns", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ChildofThorns;
