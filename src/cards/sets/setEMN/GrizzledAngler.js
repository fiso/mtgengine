"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrizzledAngler extends UnimplementedCard {
  constructor (game) {
    super(game, "Grizzled Angler", "Eldritch Moon", "EMN");
  }
}

module.exports = GrizzledAngler;
