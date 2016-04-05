"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindPeel extends UnimplementedCard {
  constructor(game) {
    super(game, "Mind Peel", "Stronghold", "STH");
  }
}

module.exports = MindPeel;
