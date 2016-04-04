"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HonorWornShaku extends Card {
  constructor(game) {
    super(game, "Honor-Worn Shaku", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HonorWornShaku;
