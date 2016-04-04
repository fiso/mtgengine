"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindControl extends UnimplementedCard {
  constructor(game) {
    super(game, "Mind Control", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = MindControl;
