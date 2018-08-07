"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Necrite extends UnimplementedCard {
  constructor (game) {
    super(game, "Necrite", "Masters Edition II", "ME2");
  }
}

module.exports = Necrite;
