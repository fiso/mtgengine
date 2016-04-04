"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChaosHarlequin extends UnimplementedCard {
  constructor(game) {
    super(game, "Chaos Harlequin", "Alliances", "ALL");
  }
}

module.exports = ChaosHarlequin;
