"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishFury extends Card {
  constructor(game) {
    super(game, "Elvish Fury", "Tempest", "TMP");
  }
}

module.exports = ElvishFury;
