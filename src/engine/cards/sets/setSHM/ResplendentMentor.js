"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ResplendentMentor extends UnimplementedCard {
  constructor (game) {
    super(game, "Resplendent Mentor", "Shadowmoor", "SHM");
  }
}

module.exports = ResplendentMentor;
