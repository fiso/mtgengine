"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrimTutor extends UnimplementedCard {
  constructor(game) {
    super(game, "Grim Tutor", "Masters Edition III", "ME3");
  }
}

module.exports = GrimTutor;
