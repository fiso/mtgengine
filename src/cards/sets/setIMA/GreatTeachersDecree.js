"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreatTeachersDecree extends UnimplementedCard {
  constructor (game) {
    super(game, "Great Teacher's Decree", "Iconic Masters", "IMA");
  }
}

module.exports = GreatTeachersDecree;
