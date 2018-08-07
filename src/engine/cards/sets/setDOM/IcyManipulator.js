"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IcyManipulator extends UnimplementedCard {
  constructor (game) {
    super(game, "Icy Manipulator", "Dominaria", "DOM");
  }
}

module.exports = IcyManipulator;
