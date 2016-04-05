"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EsperCormorants extends UnimplementedCard {
  constructor(game) {
    super(game, "Esper Cormorants", "Conflux", "CON");
  }
}

module.exports = EsperCormorants;
