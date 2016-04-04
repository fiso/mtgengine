"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PenumbraBobcat extends Card {
  constructor(game) {
    super(game, "Penumbra Bobcat", "Apocalypse", "APC");
  }
}

module.exports = PenumbraBobcat;
