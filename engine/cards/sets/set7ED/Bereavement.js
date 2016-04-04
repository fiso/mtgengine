"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bereavement extends UnimplementedCard {
  constructor(game) {
    super(game, "Bereavement", "Seventh Edition", "7ED");
  }
}

module.exports = Bereavement;
