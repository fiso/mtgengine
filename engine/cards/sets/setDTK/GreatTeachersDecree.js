"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreatTeachersDecree extends UnimplementedCard {
  constructor(game) {
    super(game, "Great Teacher's Decree", "Dragons of Tarkir", "DTK");
  }
}

module.exports = GreatTeachersDecree;
