"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CentaurCourser extends Card {
  constructor(game) {
    super(game, "Centaur Courser", "Magic 2010", "M10");
  }
}

module.exports = CentaurCourser;
