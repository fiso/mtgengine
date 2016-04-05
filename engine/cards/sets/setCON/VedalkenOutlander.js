"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VedalkenOutlander extends UnimplementedCard {
  constructor(game) {
    super(game, "Vedalken Outlander", "Conflux", "CON");
  }
}

module.exports = VedalkenOutlander;
