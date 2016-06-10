"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FolkMedicine extends UnimplementedCard {
  constructor (game) {
    super(game, "Folk Medicine", "Judgment", "JUD");
  }
}

module.exports = FolkMedicine;
