"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantShark extends UnimplementedCard {
  constructor(game) {
    super(game, "Giant Shark", "The Dark", "DRK");
  }
}

module.exports = GiantShark;
