"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KumanosBlessing extends UnimplementedCard {
  constructor(game) {
    super(game, "Kumano's Blessing", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = KumanosBlessing;
