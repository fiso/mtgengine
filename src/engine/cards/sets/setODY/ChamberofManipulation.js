"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChamberofManipulation extends UnimplementedCard {
  constructor (game) {
    super(game, "Chamber of Manipulation", "Odyssey", "ODY");
  }
}

module.exports = ChamberofManipulation;
