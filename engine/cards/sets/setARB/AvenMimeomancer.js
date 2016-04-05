"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenMimeomancer extends UnimplementedCard {
  constructor(game) {
    super(game, "Aven Mimeomancer", "Alara Reborn", "ARB");
  }
}

module.exports = AvenMimeomancer;
