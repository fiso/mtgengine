"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MartyrsTomb extends UnimplementedCard {
  constructor(game) {
    super(game, "Martyrs' Tomb", "Apocalypse", "APC");
  }
}

module.exports = MartyrsTomb;
