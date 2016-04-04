"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NoxiousField extends Card {
  constructor(game) {
    super(game, "Noxious Field", "Prophecy", "PCY");
  }
}

module.exports = NoxiousField;
