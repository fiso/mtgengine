"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UndyingBeast extends Card {
  constructor(game) {
    super(game, "Undying Beast", "Portal", "POR");
  }
}

module.exports = UndyingBeast;
