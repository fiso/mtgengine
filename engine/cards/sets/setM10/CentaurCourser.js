"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CentaurCourser extends UnimplementedCard {
  constructor(game) {
    super(game, "Centaur Courser", "Magic 2010", "M10");
  }
}

module.exports = CentaurCourser;
