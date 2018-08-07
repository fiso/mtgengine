"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkirkProspector extends UnimplementedCard {
  constructor (game) {
    super(game, "Skirk Prospector", "Dominaria", "DOM");
  }
}

module.exports = SkirkProspector;
