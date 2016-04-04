"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CacklingFlames extends UnimplementedCard {
  constructor(game) {
    super(game, "Cackling Flames", "Dissension", "DIS");
  }
}

module.exports = CacklingFlames;
