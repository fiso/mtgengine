"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VizierofRemedies extends UnimplementedCard {
  constructor (game) {
    super(game, "Vizier of Remedies", "Amonkhet", "AKH");
  }
}

module.exports = VizierofRemedies;
