"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StromkirkMentor extends UnimplementedCard {
  constructor(game) {
    super(game, "Stromkirk Mentor", "Shadows over Innistrad", "SOI");
  }
}

module.exports = StromkirkMentor;
