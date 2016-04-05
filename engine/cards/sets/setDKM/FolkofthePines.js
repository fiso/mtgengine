"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FolkofthePines extends UnimplementedCard {
  constructor(game) {
    super(game, "Folk of the Pines", "Deckmasters", "DKM");
  }
}

module.exports = FolkofthePines;
