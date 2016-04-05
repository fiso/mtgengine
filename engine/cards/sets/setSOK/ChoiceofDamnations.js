"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChoiceofDamnations extends UnimplementedCard {
  constructor(game) {
    super(game, "Choice of Damnations", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = ChoiceofDamnations;
