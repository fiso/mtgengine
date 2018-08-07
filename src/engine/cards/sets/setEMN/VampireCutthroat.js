"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampireCutthroat extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampire Cutthroat", "Eldritch Moon", "EMN");
  }
}

module.exports = VampireCutthroat;
