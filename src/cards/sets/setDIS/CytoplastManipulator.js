"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CytoplastManipulator extends UnimplementedCard {
  constructor (game) {
    super(game, "Cytoplast Manipulator", "Dissension", "DIS");
  }
}

module.exports = CytoplastManipulator;
