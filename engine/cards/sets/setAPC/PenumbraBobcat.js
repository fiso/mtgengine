"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PenumbraBobcat extends UnimplementedCard {
  constructor(game) {
    super(game, "Penumbra Bobcat", "Apocalypse", "APC");
  }
}

module.exports = PenumbraBobcat;
