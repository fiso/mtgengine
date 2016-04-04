"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KumanosBlessing extends Card {
  constructor(game) {
    super(game, "Kumano's Blessing", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = KumanosBlessing;
