"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RebelInformer extends Card {
  constructor(game) {
    super(game, "Rebel Informer", "Prophecy", "PCY");
  }
}

module.exports = RebelInformer;
