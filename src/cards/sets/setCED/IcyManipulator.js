"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IcyManipulator extends UnimplementedCard {
  constructor(game) {
    super(game, "Icy Manipulator", "Collector's Edition", "CED");
  }
}

module.exports = IcyManipulator;
