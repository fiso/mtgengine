"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HonorWornShaku extends UnimplementedCard {
  constructor (game) {
    super(game, "Honor-Worn Shaku", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HonorWornShaku;
