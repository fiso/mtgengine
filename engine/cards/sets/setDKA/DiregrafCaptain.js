"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiregrafCaptain extends UnimplementedCard {
  constructor(game) {
    super(game, "Diregraf Captain", "Dark Ascension", "DKA");
  }
}

module.exports = DiregrafCaptain;
