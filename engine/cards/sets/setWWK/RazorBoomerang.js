"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RazorBoomerang extends UnimplementedCard {
  constructor(game) {
    super(game, "Razor Boomerang", "Worldwake", "WWK");
  }
}

module.exports = RazorBoomerang;
