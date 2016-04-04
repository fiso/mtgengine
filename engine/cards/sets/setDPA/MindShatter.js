"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindShatter extends UnimplementedCard {
  constructor(game) {
    super(game, "Mind Shatter", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = MindShatter;
