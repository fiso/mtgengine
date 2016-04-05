"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AshnodsCylix extends UnimplementedCard {
  constructor(game) {
    super(game, "Ashnod's Cylix", "Alliances", "ALL");
  }
}

module.exports = AshnodsCylix;
