"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindSpring extends UnimplementedCard {
  constructor(game) {
    super(game, "Mind Spring", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = MindSpring;
