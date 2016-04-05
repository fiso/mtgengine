"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SternMentor extends UnimplementedCard {
  constructor(game) {
    super(game, "Stern Mentor", "Avacyn Restored", "AVR");
  }
}

module.exports = SternMentor;
