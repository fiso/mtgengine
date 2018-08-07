"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RestfortheWeary extends UnimplementedCard {
  constructor (game) {
    super(game, "Rest for the Weary", "Worldwake", "WWK");
  }
}

module.exports = RestfortheWeary;
