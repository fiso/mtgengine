"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmptytheWarrens extends UnimplementedCard {
  constructor(game) {
    super(game, "Empty the Warrens", "Modern Masters", "MMA");
  }
}

module.exports = EmptytheWarrens;
