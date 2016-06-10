"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantWarthog extends UnimplementedCard {
  constructor (game) {
    super(game, "Giant Warthog", "Judgment", "JUD");
  }
}

module.exports = GiantWarthog;
