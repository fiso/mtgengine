"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScribNibblers extends UnimplementedCard {
  constructor(game) {
    super(game, "Scrib Nibblers", "Worldwake", "WWK");
  }
}

module.exports = ScribNibblers;
