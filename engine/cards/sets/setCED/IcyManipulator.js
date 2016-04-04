"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IcyManipulator extends Card {
  constructor(game) {
    super(game, "Icy Manipulator", "Collector's Edition", "CED");
  }
}

module.exports = IcyManipulator;
