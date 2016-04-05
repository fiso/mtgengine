"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CharmSchool extends UnimplementedCard {
  constructor(game) {
    super(game, "Charm School", "Unglued", "UGL");
  }
}

module.exports = CharmSchool;
