"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KumanosPupils extends UnimplementedCard {
  constructor(game) {
    super(game, "Kumano's Pupils", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KumanosPupils;
