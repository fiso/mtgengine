"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JhessianBalmgiver extends Card {
  constructor(game) {
    super(game, "Jhessian Balmgiver", "Conflux", "CON");
  }
}

module.exports = JhessianBalmgiver;
