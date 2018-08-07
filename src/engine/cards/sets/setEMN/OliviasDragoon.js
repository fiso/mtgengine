"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OliviasDragoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Olivia's Dragoon", "Eldritch Moon", "EMN");
  }
}

module.exports = OliviasDragoon;
