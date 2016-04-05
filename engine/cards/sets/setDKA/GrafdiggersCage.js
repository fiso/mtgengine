"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrafdiggersCage extends UnimplementedCard {
  constructor(game) {
    super(game, "Grafdigger's Cage", "Dark Ascension", "DKA");
  }
}

module.exports = GrafdiggersCage;
