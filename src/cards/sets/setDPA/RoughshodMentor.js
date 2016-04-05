"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoughshodMentor extends UnimplementedCard {
  constructor(game) {
    super(game, "Roughshod Mentor", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = RoughshodMentor;
